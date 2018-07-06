
var gulp = require('gulp');
var jslint = require('gulp-jslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var bundle = require('gulp-bundle-assets');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var del = require('del');
var browserify = require('browserify');
var runSequence = require('run-sequence');
var babelify = require('babelify');

// 组合
gulp.task('concat', function () {
  gulp.src('./methods/*.js')
    .pipe(jslint())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('concat.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})

// 清理生成文件
gulp.task('clean', function (cb) {
  del('./dist').then( () => {
    cb()
  });
})

// 打包
gulp.task('build', function () {
  // 在一个基础的 task 中创建一个 browserify 实例
  return browserify({
      entries: './index.js',
      // entries: './methods/index.js',
      debug: true
    })// browserify 的作用就是把require资源从node_modules 里拿出来，然后打包进去到输出的js，如果没有这个插件，那么你不能看到import进来的东西，import的东西没有被打包进去
    .transform(babelify)
    .bundle()
    .pipe(source('./all.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // 在这里将转换任务加入管道
        .pipe(jslint())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

// 压缩
gulp.task('uglify', function () {
  gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})

// 默认操作
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    // 'uglify',
    ['build'],
    callback
  );
});
