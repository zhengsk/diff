import jsShortid from 'js-shortid';
import { isEmpty, isObject } from './utils/utils';

import preTemplate from './template_default';
import postTemplate from './template_modified';

let preLayouts = preTemplate.layouts;
let postLayouts = postTemplate.layouts;

let diffObj = {
    version: '1.0.0',
    key: 'key_' + jsShortid.gen(),
    rulers: {}
};

postLayouts.forEach((postLayout, index) => {
    let preLayout = preLayouts[index];

    postLayout.elements.forEach((postElement, index) => {
        let preElement = preLayout.elements[index];

        let diff = Object.keys(postElement).reduce((rst, key) => {

            let preValue = preElement[key];
            let postValue = postElement[key];

            // Add new key.
            if (!preElement.hasOwnProperty(key)) {
                rst[key] = postValue;
                return rst;
            };

            // Equal do nothing.
            if (preValue === postValue) return rst;

            // Update new value.
            if (!isObject(preValue) || !isObject(preValue)) {
                rst[key] = postValue;
                return rst;
            };

            // Object diff
            if (JSON.stringify(preValue) !== JSON.stringify(postValue)) {
                rst[key] = postValue;
                return rst;
            }

            return rst;
        }, {});
        // debugger;

        // Exsit
        if (!isEmpty(diff)) {
            let hash = 'rule_' + jsShortid.gen();
            preElement[diffObj.key] = hash;
            diffObj.rulers[hash] = diff;
        }

    });
})

debugger;
console.dirxml(diffObj);

console.dirxml(JSON.stringify(diffObj));

console.dirxml(JSON.stringify(preTemplate));