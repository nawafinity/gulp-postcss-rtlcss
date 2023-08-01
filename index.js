(function(){
    "use strict";
    var PluginError = require('plugin-error'),
        through = require('through2'),
        rtlcss = require('postcss-rtlcss'),
        // configLoader = require('rtlcss/lib/config-loader'),
        postcss = require('postcss'),
        applySourceMap = require('vinyl-sourcemaps-apply');

    module.exports = function (config) {
        return through.obj(function (file, enc, cb) {
            var result;
            if (file.isNull()) {
                this.push(file);
                return cb();
            }

            if (file.isStream()) {
                this.emit('error', new PluginError('gulp-postcss-rtlcss', 'Streaming not supported'));
                return cb();
            }

            // if (!config) {
            //     config = configLoader.load(null, file.cwd);
            // }

            /**
             * @see https://www.npmjs.com/package/postcss-rtlcss
             */
            result = postcss([
                rtlcss(config || {})
            ]).process(file.contents.toString())

            file.contents = Buffer.from(result.css);

            if (file.map) {
                applySourceMap(file, result.map);
            }

            this.push(file);
            cb();
        });
    };
})();
