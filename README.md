# gulp-postcss-rtlcss

[![MIT Licence][licence-image]][licence-url] [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][librariesio-image]][librariesio-url] [![Language grade: JavaScript][lgtm-grade-image]][lgtm-url]

[Gulp](http://gulpjs.com) plugin that uses [postcss-rtlcss](https://github.com/elchininet/postcss-rtlcss) to convert LTR CSS to RTL.

## Install

```bash
$ npm install --save-dev gulp-postcss-rtlcss
```

## Basic Usage

```js
var gulp = require('gulp');
var rtlcss = require('gulp-postcss-rtlcss');

gulp.task('default', function () {
	return gulp.src('styles.css')
		.pipe(rtlcss())
		.pipe(gulp.dest('dist'));
});
```
## Configuration

The plugin optionally accepts `POSTCSS-RTLCSS` configuration either as an argument.

>See the [POSTCSS-RTLCSS documentation](https://github.com/elchininet/postcss-rtlcss/blob/master/README.md) for more information about accepted configuration.

## Change Log

See [CHANGELOG.md](CHANGELOG.md).

[librariesio-image]: https://img.shields.io/librariesio/release/npm/gulp-postcss-rtlcss
[librariesio-url]: https://libraries.io/npm/gulp-postcss-rtlcss
[npm-image]: http://img.shields.io/npm/v/gulp-postcss-rtlcss.svg?style=flat
[npm-url]: https://www.npmjs.org/package/gulp-postcss-rtlcss
[travis-image]: http://img.shields.io/travis/nawafinity/gulp-postcss-rtlcss.svg?style=flat
[travis-url]: https://travis-ci.org/nawafinity/gulp-postcss-rtlcss
[licence-image]: http://img.shields.io/npm/l/gulp-rtlcss.svg?style=flat
[licence-url]: https://tldrlegal.com/license/mit-license
[lgtm-grade-image]: https://img.shields.io/lgtm/grade/javascript/g/nawafinity/gulp-postcss-rtlcss.svg?logo=lgtm&logoWidth=18
[lgtm-url]: https://lgtm.com/projects/g/nawafinity/gulp-postcss-rtlcss/context:javascript
