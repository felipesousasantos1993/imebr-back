module.exports = function(grunt) {
 
// Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-compress');
 
  grunt.initConfig({
    // Configure a mochaTest task 
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'test/results.txt', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false) 
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors) 
        },
        //src: ['test/**/*.js']
        src: ['test.js']
      }
    },
    compress: {
      main: {
        options: {
          archive: 'deploy/app.zip'
        },
        files: 
        [
          {src: ['*'], dest: 'deploy/'} // includes files in path 
        ]
      }
    }
  });
 
  grunt.registerTask('default', ['mochaTest']);
};