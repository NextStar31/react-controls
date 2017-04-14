"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.Dialog = (_a = ["\n.pt-dialog {\n  opacity: 1;\n  -webkit-transform: translateX(50%) scale(1);\n          transform: translateX(50%) scale(1);\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 25%;\n  right: 50%;\n  z-index: 20;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n  background: #ebf1f5;\n  width: 500px;\n  padding-bottom: 20px; }\n  .pt-dialog.pt-overlay-enter, .pt-dialog.pt-overlay-appear {\n    opacity: 0;\n    -webkit-transform: translateX(50%) scale(0.5);\n            transform: translateX(50%) scale(0.5); }\n  .pt-dialog.pt-overlay-enter-active, .pt-dialog.pt-overlay-appear-active {\n    opacity: 1;\n    -webkit-transform: translateX(50%) scale(1);\n            transform: translateX(50%) scale(1);\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    transition-duration: 300ms;\n    transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n    transition-delay: 0; }\n  .pt-dialog.pt-overlay-leave {\n    opacity: 1;\n    -webkit-transform: translateX(50%) scale(1);\n            transform: translateX(50%) scale(1); }\n  .pt-dialog.pt-overlay-leave-active {\n    opacity: 0;\n    -webkit-transform: translateX(50%) scale(0.5);\n            transform: translateX(50%) scale(0.5);\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    transition-duration: 300ms;\n    transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n    transition-delay: 0; }\n  .pt-dialog:focus {\n    outline: 0; }\n  .pt-dialog.pt-dark,\n  .pt-dark .pt-dialog {\n    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n    background: #293742;\n    color: #f5f8fa; }\n\n.pt-dialog-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-align-items: center;\n          align-items: center;\n  border-radius: 6px 6px 0 0;\n  box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);\n  background: #ffffff;\n  min-height: 40px;\n  padding-left: 20px; }\n  .pt-dialog-header .pt-icon-large {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    margin-right: 10px;\n    color: #5c7080; }\n  .pt-dialog-header h5 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-wrap: normal;\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto;\n    margin: 0;\n    line-height: inherit; }\n    .pt-dialog-header h5:last-child {\n      margin-right: 20px; }\n  .pt-dark .pt-dialog-header {\n    box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);\n    background: #30404d; }\n    .pt-dark .pt-dialog-header .pt-icon-large {\n      color: #bfccd6; }\n    .pt-dark .pt-dialog-header h5 {\n      color: #f5f8fa; }\n\n.pt-dialog-close-button {\n  line-height: 1;\n  font-family: \"Icons20\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #5c7080;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 10px; }\n  .pt-dialog-close-button:hover {\n    color: #182026; }\n  .pt-dark .pt-dialog-close-button {\n    color: #bfccd6; }\n    .pt-dark .pt-dialog-close-button:hover {\n      color: #f5f8fa; }\n\n.pt-dialog-body {\n  -webkit-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin: 20px;\n  line-height: 18px; }\n\n.pt-dialog-footer {\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin: 0 20px; }\n\n.pt-dialog-footer-actions {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end; }\n  .pt-dialog-footer-actions .pt-button {\n    margin-left: 10px; }\n"], _a.raw = ["\n.pt-dialog {\n  opacity: 1;\n  -webkit-transform: translateX(50%) scale(1);\n          transform: translateX(50%) scale(1);\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 25%;\n  right: 50%;\n  z-index: 20;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n  background: #ebf1f5;\n  width: 500px;\n  padding-bottom: 20px; }\n  .pt-dialog.pt-overlay-enter, .pt-dialog.pt-overlay-appear {\n    opacity: 0;\n    -webkit-transform: translateX(50%) scale(0.5);\n            transform: translateX(50%) scale(0.5); }\n  .pt-dialog.pt-overlay-enter-active, .pt-dialog.pt-overlay-appear-active {\n    opacity: 1;\n    -webkit-transform: translateX(50%) scale(1);\n            transform: translateX(50%) scale(1);\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    transition-duration: 300ms;\n    transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n    transition-delay: 0; }\n  .pt-dialog.pt-overlay-leave {\n    opacity: 1;\n    -webkit-transform: translateX(50%) scale(1);\n            transform: translateX(50%) scale(1); }\n  .pt-dialog.pt-overlay-leave-active {\n    opacity: 0;\n    -webkit-transform: translateX(50%) scale(0.5);\n            transform: translateX(50%) scale(0.5);\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    transition-duration: 300ms;\n    transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n    transition-delay: 0; }\n  .pt-dialog:focus {\n    outline: 0; }\n  .pt-dialog.pt-dark,\n  .pt-dark .pt-dialog {\n    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n    background: #293742;\n    color: #f5f8fa; }\n\n.pt-dialog-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-align-items: center;\n          align-items: center;\n  border-radius: 6px 6px 0 0;\n  box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);\n  background: #ffffff;\n  min-height: 40px;\n  padding-left: 20px; }\n  .pt-dialog-header .pt-icon-large {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    margin-right: 10px;\n    color: #5c7080; }\n  .pt-dialog-header h5 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-wrap: normal;\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto;\n    margin: 0;\n    line-height: inherit; }\n    .pt-dialog-header h5:last-child {\n      margin-right: 20px; }\n  .pt-dark .pt-dialog-header {\n    box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);\n    background: #30404d; }\n    .pt-dark .pt-dialog-header .pt-icon-large {\n      color: #bfccd6; }\n    .pt-dark .pt-dialog-header h5 {\n      color: #f5f8fa; }\n\n.pt-dialog-close-button {\n  line-height: 1;\n  font-family: \"Icons20\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #5c7080;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 10px; }\n  .pt-dialog-close-button:hover {\n    color: #182026; }\n  .pt-dark .pt-dialog-close-button {\n    color: #bfccd6; }\n    .pt-dark .pt-dialog-close-button:hover {\n      color: #f5f8fa; }\n\n.pt-dialog-body {\n  -webkit-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin: 20px;\n  line-height: 18px; }\n\n.pt-dialog-footer {\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin: 0 20px; }\n\n.pt-dialog-footer-actions {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end; }\n  .pt-dialog-footer-actions .pt-button {\n    margin-left: 10px; }\n"], styled_components_1.default.div(_a));
var _a;
//# sourceMappingURL=styles.js.map