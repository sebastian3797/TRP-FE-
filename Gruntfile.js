(function() {

    'use strict';

    module.exports = function(grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            jshint: {
                options: {
                    jshintrc: '.jshintrc'
                },
                all: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js' ]
            },

            karma: {
                options: {
                    configFile: 'config/karma.conf.js'
                },
                unit: {
                    singleRun: true
                },

                continuous: {
                    singleRun: false,
                    autoWatch: true
                }
            },

            html2js: {
                dist: {
                    src: [ 'app/**/*.html' ],
                    dest: 'tmp/templates.js'
                }
            },

            concat: {
                options: {
                    separator: ';'
                },
                css: {
                    src: [ './app/assets/css/*.css'],
                    dest: './app/assets/css/app.min.css'
                },
                js: {
                    src: [ './node_modules/angular/angular.min.js', './app/assets/libs/*js'],
                    dest: './app/assets/libs/app.min.js'
                }
            },

            uglify: {
                dist: {
                    files: {
                        'dist/app.js': [ 'dist/app.js' ]
                    },
                    options: {
                        mangle: false
                    }
                }
            },

            clean: {
                js: ['./app/assets/libs/*js'],
                jsRestrict: ['./app/assets/libs/*js*', '!./app/assets/libs/app.min.js'],
                css: ['./app/assets/css/*.css']
            },

            watch: {
                dev: {
                    files: [ 'Gruntfile.js'],
                    options: {
                        atBegin: true,
                        livereload: true
                    }
                },
                min: {
                    files: [ 'Gruntfile.js', 'app/*.js', '*.html' ],
                    tasks: [ 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist' ],
                    options: {
                        atBegin: true
                    }
                }
            },

            connect: {
                server: {
                    options: {
                        hostname: 'localhost',
                        port: 8080,
                        open: true
                    }
                }
            },

            compress: {
                dist: {
                    options: {
                        archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                    },
                    files: [{
                        src: [ 'index.html' ],
                        dest: '/'
                    }, {
                        src: [ 'dist/**' ],
                        dest: 'dist/'
                    }, {
                        src: [ 'assets/**' ],
                        dest: 'assets/'
                    }, {
                        src: [ 'libs/**' ],
                        dest: 'libs/'
                    }]
                }
            },

            copy: {
                nodeModulesCssTo: {
                    files: [{
                        expand: true,
                        cwd: './node_modules/bootstrap/dist/css/',
                        src: 'bootstrap.min.css*',
                        dest: './app/assets/css/'
                    }]
                },
                nodeModulesJsToLibs: {
                    files: [{
                        expand: true,
                        cwd: './node_modules/angular/',
                        src: 'angular.min.js',
                        dest: './app/assets/libs/'
                    },{
                        expand: true,
                        cwd: './node_modules/angular-animate/',
                        src: 'angular-animate.min*',
                        dest: './app/assets/libs/'
                    }, {
                        expand: true,
                        cwd: './node_modules/angular-ui-router/release/',
                        src: 'angular-ui-router.min*',
                        dest: './app/assets/libs/'
                    }, {
                        expand: true,
                        cwd: './node_modules/angular-ui-bootstrap/dist',
                        src: 'ui-bootstrap-tpls.js',
                        dest: './app/assets/libs/'
                    }, {
                        expand: true,
                        cwd: './node_modules/angular-ui-router-uib-modal/',
                        src: 'angular-ui-router-uib-modal.js',
                        dest: './app/assets/libs/'
                    }]
                }
            }

        });

        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-compress');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-html2js');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-karma');

        grunt.registerTask('start', [
            'connect:server',
            'watch:dev'
        ]);

        grunt.registerTask('dev', [
            'clean:js',
            'copy:nodeModulesJsToLibs',
            'copy:nodeModulesCssTo'
        ]);

        grunt.registerTask('package', [
            'clean:temp',
            'jshint',
            'karma:unit',
            'html2js:dist',
            'concat:js',
            'uglify:dist',
            'clean:temp',
            'compress:dist'
        ]);
    };
})();
