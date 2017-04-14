"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("normalize.css/normalize.css");
var React = require("react");
var BaseControl_1 = require("../BaseControl/BaseControl");
var styles_1 = require("./styles");
var UpDate = (function (_super) {
    __extends(UpDate, _super);
    function UpDate(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.componentDidMount = function () {
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    UpDate.prototype.renderControl = function () {
        var _value = this.props.value;
        if (typeof this.props.value === 'string' || this.props.value instanceof String) {
            _value = this.getDate(_value);
        }
        return React.createElement(styles_1.default, { format: this.props.format, value: this.props.value, hasError: this.props.hasError, onChange: this.onChange });
    };
    UpDate.prototype.onChange = function (newDate) {
        this.handleChangeEvent({ value: newDate });
        return newDate;
    };
    UpDate.prototype.getDate = function (date) {
        var dateParts = date.split("/");
        return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
    };
    return UpDate;
}(BaseControl_1.BaseControl));
UpDate.defaultProps = {
    format: "DD/MM/YYYY",
    value: ""
};
exports.default = UpDate;
//# sourceMappingURL=UpDate.js.map