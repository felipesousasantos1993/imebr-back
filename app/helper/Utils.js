var DataSorteioDTO = require('../dto/DataSorteioDTO');
var DateDiff = require('date-diff');
var dateFormat = require('dateformat');
var logger = global.log4js .getLogger("[Utils]");

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

Date.isLeapYear = function (year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};

Date.getDaysInMonth = function (year, month) {
  return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () {
  return Date.isLeapYear(this.getFullYear());
};

Date.prototype.getDaysInMonth = function () {
  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
  var n = this.getDate();
  this.setDate(1);
  this.setMonth(this.getMonth() + value);
  this.setDate(Math.min(n, this.getDaysInMonth()));
  return this;
};

Array.prototype.contains = function (obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
}

function Utils() {
}

Utils.prototype.verificaSeMesEstaContidoPeriodicidade = function (mes, modalidade) {

  var meses = [];

  modalidade.Periodicidade.Meses.forEach(function (m, index) {
    meses.push(m.numeroMes);
  });

  return meses.contains(mes);
}

Utils.prototype.convertDateBanco = function (dateStr) {
  var parts = dateStr.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

Utils.prototype.getProximoMes = function (dataSorteio) {
  var primeiro_dia_do_mes = "01";
  var mes = dataSorteio.getMonth() + 1;
  var ano = dataSorteio.getFullYear();
  return new Date(ano, mes, primeiro_dia_do_mes);
}

Utils.prototype.createDateBeginMonth = function (dataAtual) {
  var primeiro_dia_do_mes = "01";
  var mes = dataAtual.getMonth();
  var ano = dataAtual.getFullYear();
  return new Date(ano, mes, primeiro_dia_do_mes);
}

Utils.prototype.buscaDataSorteio = function (modalidade, dadosDaVenda, callback) {

  var idTitulo = dadosDaVenda.idTitulo;
  var valor = dadosDaVenda.valor;
  var dataDebito = new Date(this.convertDateBanco(dadosDaVenda.dataDebito));;
  var dataAtual = dataDebito;
  var frequenciaDiaDaSemana = modalidade.Periodicidade.diaSemana;

  var inicio = 0;
  var qtdTotalSorteio = modalidade.quantidadeSorteios; //30
  var datasGravadas = 0;
  var datas = [];

  while (inicio < qtdTotalSorteio) {
    var diaDaSemanaPagamento = dataAtual.getDay() + 1;
    var mes = dataAtual.getMonth() + 1;

    if (this.verificaSeMesEstaContidoPeriodicidade(mes, modalidade)) {

      if (diaDaSemanaPagamento == frequenciaDiaDaSemana || frequenciaDiaDaSemana == 0) {

        var diff = new DateDiff(dataAtual, dataDebito);
        var diffQtdMeses = Math.trunc(diff.months());

        var tempDataAtual = new Date(dataAtual);
        var tempDataFim = tempDataAtual.addMonths(diffQtdMeses);
        if (dataAtual < tempDataFim) {
          diffQtdMeses = diffQtdMeses - 1;
        }

        var mesVigencia = 1 + diffQtdMeses;

        dataIniMes = "";
        dataFimMes = "";
        inicioVigencia = "";
        fimVigencia = "";

        if (modalidade.Periodicidade.numeroInicioMesVigencia == null) {
          dataIniMes = this.createDateBeginMonth(dataAtual);
          dataFimMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

          inicioVigencia = 1;
          fimVigencia = mesVigencia;
        } else {
          inicioVigencia = modalidade.Periodicidade.numeroInicioMesVigencia;
          fimVigencia = modalidade.Periodicidade.numeroFimMesVigencia;
          var temp = new Date(dataDebito);
          dataIniMes = temp.addMonths(mesVigencia - 1);
          var temp2 = new Date(dataIniMes);
          dataFimMes = (temp2.addMonths(1)).addDays(-1);
        }

        diff = new DateDiff(dataAtual, dataIniMes);
        var qtdDias = diff.days();

        var numSemana = Math.trunc(qtdDias / 7) + 1;

        diff = new DateDiff(dataFimMes, dataAtual);
        var qtdDiasRestantes = diff.days();

        var semanasRestantes = Math.trunc(qtdDiasRestantes / 7);
        var totalSemanas = numSemana + semanasRestantes;

        if (((modalidade.Periodicidade.frequencia == "TD") ||
          (modalidade.Periodicidade.frequencia == "PR" && modalidade.Periodicidade.quantidadeFrequencia >= numSemana) ||
          (modalidade.Periodicidade.frequencia == "SE" && numSemana == 2) ||
          (modalidade.Periodicidade.frequencia == "TR" && numSemana == 3) ||
          (modalidade.Periodicidade.frequencia == "UL" && numSemana > (totalSemanas - modalidade.Periodicidade.quantidadeFrequencia)))
          && inicioVigencia <= mesVigencia && mesVigencia <= fimVigencia) {

          datasGravadas++;
          inicio++;

          dataSorteio = new DataSorteioDTO(dataAtual, modalidade.tipoSorteio,
            modalidade.idModalidade, modalidade.valorMultiplo,
            idTitulo, valor, inicio);

          datas.push(dataSorteio);
        }
        dataAtual = dataAtual.addDays(7);
      } else {
        dataAtual = dataAtual.addDays(1);
      }
    } else {
      dataAtual = this.getProximoMes(dataAtual);
    }
  }
  callback(null, datas);
}

module.exports = function () {
  return new Utils();
};