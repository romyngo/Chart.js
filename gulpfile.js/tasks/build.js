var gulp = require('gulp');

var concat = require('gulp-concat');
var gulpWebpack = require('webpack-stream');
var path = require('path');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

var config = require('../config');
var package = require('../../package.json');

function buildTask() {

	return gulp.src(path.join(config.root.dest, 'Chart.js'))
		.pipe(gulpWebpack({
			context: process.cwd(),
			externals: {
				moment: "moment"
			},
			output: {
				library: "Chart",
				libraryTarget: "umd",
				umdNamedDefine: true
			},
			resolve: {
				root: [process.cwd(), path.join(process.cwd(), 'node_modules')]
			}
		}, null, function(err, stats) {
			if (err) {
				throw new gutil.PluginError("webpack", err);
			}

			util.log("[webpack]", stats.toString({
				// output options
				errorDetails: true
			}));
		}))
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(concat('Chart.min.js'))
		.pipe(gulp.dest(config.root.dest));

}

gulp.task('build', ['concat'], buildTask);
module.exports = buildTask;