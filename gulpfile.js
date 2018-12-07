const gulp = require('gulp')
const less = require('gulp-less')

gulp.task('lessTask', () => {
  gulp.src('app/public/less/index.less')
  .pipe(less())
  .pipe(gulp.dest('app/public/css'))
})

gulp.task('watch', () => {
  gulp.watch('app/public/less/**/*.less', ['lessTask'])
})

gulp.task('default', ['lessTask'], () => {

})