let lodash = require('lodash');

var a = {
    "colors": { "j1fqawmv.5x9": "rgba(236,236,236,1)", "1492047023977": "rgba(255,255,255,0)" },
    "version": "2.4.21",
    "ww": [33, 44]
}


var b = {
    "colors": { "j1fqawmv.5x9": "rgba(255,255,255,0.5)", "1492047023977": "rgba(255,255,255,1)" },
    "version": "2.4.21",
    "ww": [33, 44]
}


function _extends(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function properObject(o) {
    return isObject(o) && !o.hasOwnProperty ? _extends({}, o) : o;
}

function isEmpty(o) {
    return Object.keys(o).length === 0;
}

function isObject(o) {
    return o != null && typeof o === 'object';
}

function isArray(o) {
    return Array.isArray(o);
}

function diff(a, b) {

    if (a === b) return {}; // equal return no diff
    if (!isObject(a) || !isObject(b)) return b; // return updated b

    if (isArray(a) && isArray(b)) {
        if (JSON.stringify(a) !== JSON.stringify(b)) {
            return b;
        } else {
            return []
        }
    }

    var rst = {};
    return Object.keys(b).reduce(function(prev, key) {
        if (!a.hasOwnProperty(key)) {
            return _extends({}, prev, _defineProperty({}, key, b[key])); // return added r key
        };

        var difference = diff(a[key], b[key]);

        if (isObject(difference) && isEmpty(difference)) return prev; // return no diff

        return _extends({}, prev, _defineProperty({}, key, difference)); // return updated key
    }, rst);
}

var x = diff(a, b);
console.info(JSON.stringify(x));

let merged = lodash.merge({}, a, x);
var x = diff(b, merged);
console.info(JSON.stringify(x));

console.info(JSON.stringify(merged) === JSON.stringify(b));