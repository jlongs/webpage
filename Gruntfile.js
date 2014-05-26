//Gruntfile
module.exports = function(grunt){
    // grunt
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
				   ' * fpi webpage v<%= pkg.version %>\n' +
				   ' */\n',
        less: {
		  development: {
			options: {
			  paths: ["dist/css"]
			},
			files: {
			  "dist/css/<%= pkg.name %>.css": "src/less/ui-panel.less"
			}
		  }
		}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less:development']);
}
