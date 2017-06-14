'use strict';

var _extends = function(target) {
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isDate = function isDate(d) {
    return d instanceof Date;
};
var isEmpty = function isEmpty(o) {
    return Object.keys(o).length === 0;
};
var isObject = function isObject(o) {
    return o != null && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
};
var properObject = function properObject(o) {
    return isObject(o) && !o.hasOwnProperty ? _extends({}, o) : o;
};

var diff = function diff(lhs, rhs) {
    if (lhs === rhs) return {}; // equal return no diff

    if (!isObject(lhs) || !isObject(rhs)) return rhs; // return updated rhs

    var l = properObject(lhs);
    var r = properObject(rhs);

    var deletedValues = Object.keys(l).reduce(function(acc, key) {
        return r.hasOwnProperty(key) ? acc : _extends({}, acc, _defineProperty({}, key, undefined));
    }, {});

    if (isDate(l) || isDate(r)) {
        if (l.toString() == r.toString()) return {};
        return r;
    }

    return Object.keys(r).reduce(function(acc, key) {
        if (!l.hasOwnProperty(key)) return _extends({}, acc, _defineProperty({}, key, r[key])); // return added r key

        var difference = diff(l[key], r[key]);

        if (isObject(difference) && isEmpty(difference) && !isDate(difference)) return acc; // return no diff

        return _extends({}, acc, _defineProperty({}, key, difference)); // return updated key
    }, deletedValues);
};


const lhs = {
    foo: {
        bar: {
            a: ['a', 'b'],
            b: 2,
            c: ['x', 'y'],
            e: 100 // deleted 
        }
    },
    buzz: 'world'
};

const rhs = {
    foo: {
        bar: {
            a: ['a'], // index 1 ('b')  deleted 
            b: 2, // unchanged 
            c: ['x', 'y', 'z'], // 'z' added 
            d: 'Hello, world!' // added 
        }
    },
    buzz: 'fizz' // updated 
};

let d = diff(lhs, rhs);

let res = {}
    //let assign = lodash.merge(res, lhs, d);

console.info(res);