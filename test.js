(function () {
    'use strict';
    var assert = require('assert');
    var Vinyl = require('vinyl');
    var gulpRtlcss = require('./index');

    const strigfy = (str) => {
        return str
            .replace(/(\r\n|\n|\r)/gm, '')
            .replace(/ /g, '')
    }
    it('should convert LTR CSS to RTL', function (cb) {
        var stream = gulpRtlcss();

        stream.on('data', function (file) {
            assert.equal(strigfy(file.contents.toString()), strigfy('[dir="ltr"] .selector { float: left; } [dir="rtl"] .selector { float: right; }'));
            cb();
        });

        stream.write(new Vinyl({
            path: 'styles.css',
            contents: Buffer.from('.selector { float: left; /* comment */ }')
        }));
    });

    it('should accept rtlcss configuration', function (cb) {
        var stream = gulpRtlcss({
            ltrPrefix: '[lang="latin"]',
            rtlPrefix: '[lang="arabic"]'
        });

        stream.on('data', function (file) {
            assert.equal(strigfy(file.contents.toString()), strigfy('[lang="latin"] .selector { float: left; } [lang="arabic"] .selector { float: right; }'));
            cb();
        });

        stream.write(new Vinyl({
            path: 'styles.css',
            contents: Buffer.from(".selector { float: left; /* comment */ }")
        }));
    });
})();
