"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styleUtils_1 = require("./styleUtils");
var themedComponents_1 = require("../theming/themedComponents");
var theming_1 = require("../theming");
var styles_1 = require("../Paragraph/styles");
var borderWarning = (_a = ["\n  border-radius:3px;\n  border-color:", ";\n  border-width:1px;\n  border-style: solid;\n  padding:6px;\n"], _a.raw = ["\n  border-radius:3px;\n  border-color:", ";\n  border-width:1px;\n  border-style: solid;\n  padding:6px;\n"], themedComponents_1.css(_a, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.warning : theming_1.default.warning; }));
function setBorder(props) {
    if (props.border) {
        return borderWarning;
    }
    else {
        return (_a = [""], _a.raw = [""], themedComponents_1.css(_a));
    }
    var _a;
}
exports.UnorderedListStyled = (_b = ["\n  text-align: center;\n  list-style-type:", ";\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], _b.raw = ["\n  text-align: center;\n  list-style-type:", ";\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], themedComponents_1.default.ul(_b, function (props) { return props.type; }, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }));
exports.OrderedListStyled = (_c = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], _c.raw = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], themedComponents_1.default.ol(_c, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }));
exports.ListItemStyled = (_d = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n  ", ";\n"], _d.raw = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n  ", ";\n"], themedComponents_1.default.li(_d, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }, function (props) { return setBorder(props); }));
exports.DefinitionListStyled = (_e = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], _e.raw = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], themedComponents_1.default.dl(_e, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }));
exports.DefinitionDataStyled = (_f = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], _f.raw = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], themedComponents_1.default.dd(_f, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }));
exports.DefinitionTermStyled = (_g = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], _g.raw = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], themedComponents_1.default.dt(_g, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }));
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=styles.js.map