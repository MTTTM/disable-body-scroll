const { src, dest,series } = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
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
        .pipe(uglify())
        .pipe(rename({ suffix: '.es.min' }))
        .pipe(dest("./dist/"))
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
                "exportNamespace":"DisableBodyScroll"
             }
            ]]
        }))
         .pipe(uglify())
        .pipe(rename({ suffix: '.browser.min' }))
        .pipe(dest("./dist/"))
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
        .pipe(uglify())
        .pipe(rename({ suffix: '.amd.min' }))
        .pipe(dest("./dist"))
  cb();
}

exports.default = series(es6, umd,iife);