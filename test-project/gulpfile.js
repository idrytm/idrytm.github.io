var gulp = require("gulp"),
	sass = require("gulp-sass");

gulp.task("sass", function() {
	return gulp.src("app/sass/main.scss")
		.pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
		.pipe(gulp.dest("dist/css"));
})	

gulp.task("watch", function() {
	gulp.watch("app/sass/main.scss", ["sass"]);
});

gulp.task("default", ["watch"]);