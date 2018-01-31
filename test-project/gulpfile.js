var gulp = require("gulp"),
	sass = require("gulp-sass");

gulp.task("sass", function() {
	return gulp.src("app/sass/main.sass")
		.pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
		.pipe(gulp.dest("dist/css"));
})	

gulp.task("watch", function() {
	gulp.watch("app/sass/main.sass", ["sass"]);
});

gulp.task("default", ["watch"]);