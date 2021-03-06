import { isDate, isEmpty, isObject, properObject } from './utils/utils';

const diff = (lhs, rhs) => {
    if (lhs === rhs) return {}; // equal return no diff

    if (!isObject(lhs) || !isObject(rhs)) return rhs; // return updated rhs

    if (Array.isArray(lhs) || Array.isArray(rhs)) {
        if (JSON.stringify(lhs) === JSON.stringify(rhs)) {
            return {}
        } else {
            return rhs;
        }
    }

    const l = properObject(lhs);
    const r = properObject(rhs);

    const deletedValues = Object.keys(l).reduce((acc, key) => {
        return r.hasOwnProperty(key) ? acc : {...acc, [key]: undefined };
    }, {});

    if (isDate(l) || isDate(r)) {
        if (l.toString() == r.toString()) return {};
        return r;
    }

    return Object.keys(r).reduce((acc, key) => {
        if (!l.hasOwnProperty(key)) return {...acc, [key]: r[key] }; // return added r key

        const difference = diff(l[key], r[key]);

        if (isObject(difference) && isEmpty(difference) && !isDate(difference)) return acc; // return no diff

        return {...acc, [key]: difference }; // return updated key
    }, deletedValues);
};

export default diff;