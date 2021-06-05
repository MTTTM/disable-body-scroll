const { src, dest } = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const a=function (cb) {
  src("./libs/index.js")
        .pipe(babel({
          "presets": ['@vue/cli-plugin-babel/preset',
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry",//兼容，依赖core-js
              "corejs": '3',
              "targets": '> 1%,last 2 versions,not ie <= 11',
            }
          ]
        ]
        }))
          .pipe(uglify())
        .pipe(dest("./dist/"))
  cb();
}
//编译js6到指定文件目录
exports.default = a;