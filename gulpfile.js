var gulp    = require('gulp');
var babel   = require('gulp-babel');
var webpack = require('webpack-stream');
var del     = require('del');

var paths = {
  toCopy: ["src/mod-accm-web/webroot/index.html"],
  js     :"src/**/*.js",
  webroot:"src/mod-accm-web/webroot",
  dest   :"bin"
}

gulp.task('build', ['copy', 'build-client', 'build-server'])

gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build-server', function(){
  gulp.src([paths.js, "!"+paths.webroot])
  .pipe(babel({
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-object-assign']
  }))
  .pipe(gulp.dest(paths.dest));
});

gulp.task('build-client', function() {
  return gulp.src(paths.webroot + "/js/app.js")
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest + "/webroot/js"));
});

gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: paths.webroot })
    .pipe(gulp.dest(paths.dest + "/webroot"));
});

gulp.task('clean', function(cb){
  del([paths.dest], cb);
});