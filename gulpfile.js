const { src, dest,series } = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
const es6=function (cb) {
  src("./libs/index.js")
  
        .pipe(babel({
          "presets": [
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
        .pipe(browserify({}))
        //  .pipe(uglify())
        .pipe(dest("./dist/es/"))
        //iife
  cb();
}

const iife=function (cb) {
  src("./libs/index.js")
  
        .pipe(babel({
          "presets": [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry",//兼容，依赖core-js
              "corejs": '3',
              "targets": '> 1%,last 2 versions,not ie <= 11',
            }
          ],
         
        ],
        "plugins": [['babel-plugin-transform-modules-iife', 
              {
                "exportNamespace":"disabledBodyScroll"
             }
            ]]
        }))
        .pipe(browserify({}))
        //  .pipe(uglify())
        .pipe(dest("./dist/iife/"))
        //iife
  cb();
}
const umd=function (cb) {
  src("./libs/index.js")
  
        .pipe(babel({
          "presets": [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": false,//兼容，依赖core-js
              "modules":"umd",
              "corejs": '3',
              "targets": '> 1%,last 2 versions,not ie <= 11',
            }
          ]
        ]
        }))
        .pipe(browserify({}))
        //  .pipe(uglify())
        .pipe(dest("./dist/amd"))
        //iife
  cb();
}

exports.default = series(es6, umd,iife);