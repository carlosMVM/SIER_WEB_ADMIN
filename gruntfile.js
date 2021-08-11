module.exports = (grunt) => {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		config: {
			development: {},
			prod: {},
		},
		clean: {
			default: ["build/**/*", "dist/**/*"],
			grunt: ["dist/Gruntfile.js", "dist/build_app.js"],
		},
		copy: {
			default: {
				files: [
					{
						expand: true,
						src: "*.js",
						dest: "dist",
					},
					{
						src: "package-server.json",
						dest: "dist/package.json",
					},
					{
						expand: true,
						src: "build/**",
						dest: "dist",
					},
					{
						src: "web-server.config",
						dest: "dist/web.config",
					},
				],
			},
			win: {
				files: [
					{
						expand: true,
						src: "*.js",
						dest: "dist",
					},
					{
						src: "package-server.json",
						dest: "dist/package.json",
					},
					{
						expand: true,
						src: "build/**",
						dest: "dist",
					},
					{
						expand: true,
						src: "web.config",
						dest: "dist",
					},
				],
			}
		},
		shell: {
			install_nodejs_10: {
				command: "npm install node@10.6.0 -g",
			},
			build_react: {
				command: "npm run build",
			},
			build_react_win: {
				command: "npm run build-win",
			},
			run_server: {
				command: "node server.js",
			},
			set_env_var: {
				command: (env = "development") => `export NODE_ENV=${env}`,
			},
			set_env_var_win: {
				command: (env = "development") => `SET NODE_ENV=${env}`,
			},
			start_server: {
				command: "nodemon server.js",
			},
		},
	});

	// Load plugins for Tasks.
	grunt.loadNpmTasks("grunt-config");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-shell");

	// Getting deploy configuration
	const stage = grunt.option("stage") || "development";

	grunt.registerTask("local", ["config:development", "clean", "shell:set_env_var", "shell:start_server"]);
	grunt.registerTask("deploy", [`config:${stage}`, "clean", `shell:set_env_var:${stage}`, "shell:build_react", "copy", "clean:grunt"]);
	grunt.registerTask("deploy-win", [`config:${stage}`, "clean", `shell:set_env_var_win:${stage}`, "shell:build_react_win", "copy:win", "clean:grunt"]);
};
