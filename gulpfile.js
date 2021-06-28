const gulp = require("gulp")
const imagemin = require("gulp-imagemin")


function imgSquash() {
   return gulp
      .src("./assets/images/**/*")
      .pipe(imagemin())
      .pipe(gulp.dest("./assets/images/minified"))
}

gulp.task("imgSquash", imgSquash)

gulp.task("watch", () => {
   gulp.watch("./assets/images/*", imgSquash)
})

gulp.task("default", gulp.series("imgSquash"))
