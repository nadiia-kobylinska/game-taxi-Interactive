"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportFactory = void 0;
var ComfortTransport_1 = require("../models/ComfortTransport");
var EconomyTransport_1 = require("../models/EconomyTransport");
var BusinessTransport_1 = require("../models/BusinessTransport");
var TransportFactory = /** @class */ (function () {
    function TransportFactory() {
    }
    TransportFactory.createTransport = function (type) {
        switch (type) {
            case 'economy':
                return new EconomyTransport_1.EconomyTransport();
            case 'comfort':
                return new ComfortTransport_1.ComfortTransport();
            case 'business':
                return new BusinessTransport_1.BusinessTransport();
            default:
                throw new Error('Unknown transport type');
        }
    };
    return TransportFactory;
}());
exports.TransportFactory = TransportFactory;
