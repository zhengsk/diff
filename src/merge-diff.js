import lodash from 'lodash';

let templateDefault = { "version": "2.4.21", "type": "poster", "global": { "zoom": 1 }, "layouts": [{ "title": "", "backgroundImage": null, "backgroundColor": "#FFFFFF", "backgroundRepeat": "no-repeat", "height": 480, "width": 640, "repeatId": null, "repeatGroup": null, "elements": [{ "transform": { "a": 1, "b": 0, "c": 0, "d": 1, "tx": 0, "ty": 0 }, "type": "image", "category": "", "opacity": 1, "padding": [0, 0, 0, 0], "width": 263, "height": 187.8571428571429, "left": 57, "top": 146.07142857142856, "boxShadow": null, "resize": 7, "dragable": true, "rotatable": true, "editable": true, "frozen": false, "hidden": false, "lock": false, "style": {}, "borderRadius": 30, "clip": null, "url": "//st0.dancf.com/www/0/design/1465798469378-1.png", "version": "2.4.21", "key_EYbHPmAh0r": "rule_EYbHPndtfy" }, { "transform": { "a": 1, "b": 0, "c": 0, "d": 1, "tx": 0, "ty": 0 }, "type": "text", "category": "", "opacity": 1, "padding": [0, 0, 0, 0], "width": 99.99999999999997, "height": 48.99999999999997, "left": 422, "top": 215.5, "boxShadow": null, "resize": 7, "dragable": true, "rotatable": true, "editable": true, "frozen": false, "hidden": false, "lock": false, "style": {}, "borderRadius": 0, "clip": null, "color": "rgba(101, 16, 204, 1)", "fontFamily": "Microsoft Yahei", "fontStyle": "normal", "fontWeight": 400, "fontSize": 38, "lineHeight": 1.2, "letterSpacing": 0, "textDecoration": "none", "writingMode": "horizontal-tb", "textAlign": "left", "verticalAlign": "top", "content": "OK", "textShadow": null, "version": "2.4.21", "key_EYbHPmAh0r": "rule_EYbHPn1E50" }], "top": 0 }, { "title": "", "backgroundImage": null, "backgroundColor": "#FFFFFF", "backgroundRepeat": "no-repeat", "height": 480, "width": 640, "repeatId": null, "repeatGroup": null, "elements": [{ "transform": { "a": 1, "b": 0, "c": 0, "d": 1, "tx": 0, "ty": 0 }, "type": "text", "category": "", "opacity": 1, "padding": [0, 0, 0, 0], "width": 120, "height": 24, "left": 237, "top": 143, "boxShadow": null, "resize": 4, "dragable": true, "rotatable": true, "editable": true, "frozen": false, "hidden": false, "lock": false, "style": {}, "borderRadius": 0, "clip": null, "color": "rgba(255,102,0,0.8)", "fontFamily": "Microsoft Yahei", "fontStyle": "normal", "fontWeight": 400, "fontSize": 20, "lineHeight": 1.2, "letterSpacing": 0, "textDecoration": "none", "writingMode": "horizontal-tb", "textAlign": "left", "verticalAlign": "top", "content": "请输入文字", "textShadow": null, "version": "2.4.21", "key_EYbHPmAh0r": "rule_EYbHPqJPR0" }, { "transform": { "a": 1, "b": 0, "c": 0, "d": 1, "tx": 0, "ty": 0 }, "type": "image", "category": "", "opacity": 1, "padding": [0, 0, 0, 0], "width": 436, "height": 226.42857142857144, "left": 102, "top": 205.78571428571428, "boxShadow": null, "resize": 7, "dragable": true, "rotatable": true, "editable": true, "frozen": false, "hidden": false, "lock": false, "style": {}, "borderRadius": 30, "clip": null, "url": "//st0.dancf.com/www/0/design/1465798469378-1.png", "version": "2.4.21", "key_EYbHPmAh0r": "rule_EYbHPqVFF6" }], "top": 480 }] }
let template = lodash.cloneDeep(templateDefault);

let rulesDatas = { "version": "1.0.0", "key": "key_EYbHPmAh0r", "rulers": { "rule_EYbHPndtfy": { "transform": { "a": 0.8660254037844384, "b": -0.5000000000000004, "c": 0.5000000000000004, "d": 0.8660254037844384, "tx": 0, "ty": 0 }, "left": 81, "top": 157.07142857142856, "clip": { "left": 268.2191638672116, "right": 105.20508075688758, "bottom": 167.3008226845809, "top": 99.4307806183472, "_left": 75.66471820493486, "_top": 82.94486372867098 } }, "rule_EYbHPn1E50": { "color": "rgba(255, 0, 0, 1)", "fontSize": 48 }, "rule_EYbHPqJPR0": { "width": 386, "height": 288, "left": 42, "top": 110.37090432503277, "fontFamily": "SentyCHALK", "fontSize": 120, "content": "我是中国人🇨🇳" }, "rule_EYbHPqVFF6": { "transform": { "a": 0.9443397809016523, "b": -0.32897169818484295, "c": 0.32897169818484295, "d": 0.9443397809016523, "tx": 0, "ty": 0 }, "width": 121, "height": 188.17038007863698, "left": 459, "top": 168.78571428571428 } } }

let ruleKeyName = rulesDatas.key;
let rules = rulesDatas.rulers;
debugger;
template.layouts.forEach(layout => {
    layout.elements.forEach(element => {
        if (element.hasOwnProperty(ruleKeyName)) {
            // Assign rules to element.
            Object.assign(element, rules[element[ruleKeyName]]);

            // Delete ruleKeyName.
            delete element[ruleKeyName];
        }
    });
});


console.info(template);
console.info(JSON.stringify(template));