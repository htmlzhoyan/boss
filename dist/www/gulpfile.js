var gulp = require('gulp');
// webserver服务器
var webserver = require('gulp-webserver');
//url地址
var url = require('url');
// fileSystem
//监控模块
var watch  = require('gulp-watch');
// 队列模块
var connect = require('gulp-connect');


//设置监控
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
  	 port:8080,
 	})
 	)
      
	});

gulp.task("watch",function(){
  gulp.watch('*.html',['reload']);
})

// gulp.task('connect', function() {
//   connect.server({
//     root: './',
//     livereload: true
//   });
// });

gulp.task('reload', function() {
  return gulp.src('*.html')
    .pipe(connect.reload());
});

//设置默认任务 
gulp.task('default',['webserver','watch']);