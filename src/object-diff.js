import diff from './diff';
// import {diff} from 'deep-object-diff';

var a = {
    speed: 4,
    power: 54,
    x: [33,44,66]
};

var b = {
    speed: 4, // unchanged
    power: 22, // changed
    x: [33,66,77,88]
};


let result = diff(a, b);

console.info(result);

console.dirxml(result);