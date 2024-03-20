"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessTransport = void 0;
var Transport_1 = require("./Transport");
var BusinessTransport = /** @class */ (function (_super) {
    __extends(BusinessTransport, _super);
    function BusinessTransport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'business';
        _this.costMultiplier = 2.0;
        return _this;
    }
    BusinessTransport.prototype.handleEvent = function (event) {
    };
    return BusinessTransport;
}(Transport_1.Transport));
exports.BusinessTransport = BusinessTransport;
