var objectDiff = require('object-diff');

var a = {
    speed: 4,
    power: 54,
    height: undefined,
    level: 1,
    arr: [3, 5, 9, 10],
    obj: {
        a: 33,
        b: 44
    }
};

var b = {
    speed: 4, // unchanged 
    power: 22, // changed 
    level: undefined, // changed 
    weight: 10, // added,
    arr: [3, 4, 6],
    xx: {
        x: 3,
        y: 4
    },
    obj: {
        a: 33,
        b: 46
    }
};

let diff = objectDiff(a, b);
console.log(diff);