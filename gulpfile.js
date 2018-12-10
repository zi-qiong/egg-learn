const gulp = require('gulp')
const less = require('gulp-less')//less解析
const cssUglify = require('gulp-minify-css')//压缩css
const imagemin = require('gulp-imagemin')//压缩图片
const autoprefixer = require('gulp-autoprefixer')//css自动添加浏览器兼容前缀
const uglify = require('gulp-uglify')//js压缩

//css处理
gulp.task('lessTask', () => {
  gulp.src('app/public/less/index.less')
  .pipe(less())
  .pipe(autoprefixer({
    cascade: false,
  }))
  .pipe(cssUglify())
  .pipe(gulp.dest('app/public/css'))
})
//图片压缩
gulp.task('imgTask', () => {
  gulp.src('app/public/pic/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('app/public/img'))
})
//js压缩
gulp.task('jsTask', () => {
  gulp.src('app/public/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
})

gulp.task('watch', () => {
  gulp.watch('app/public/less/**/*.less', ['lessTask']);
  gulp.watch('app/public/pic/**/*.less', ['imgTask']);
})

gulp.task('default', ['lessTask', 'imgTask', 'jsTask'], () => {

})