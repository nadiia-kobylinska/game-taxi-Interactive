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
exports.UnexpectedDetourEvent = exports.WeatherChangeEvent = exports.CarBreakdownEvent = exports.TrafficJamEvent = exports.CompositeEvent = exports.GameEvent = void 0;
var GameEvent = /** @class */ (function () {
    function GameEvent(description, impact) {
        this.description = description;
        this.impact = impact;
    }
    return GameEvent;
}());
exports.GameEvent = GameEvent;
var CompositeEvent = /** @class */ (function (_super) {
    __extends(CompositeEvent, _super);
    function CompositeEvent(description, events) {
        var _this = _super.call(this, description, function () { return _this.handleCompositeEvent(); }) || this;
        _this.events = [];
        _this.events = events;
        return _this;
    }
    CompositeEvent.prototype.handleCompositeEvent = function () {
        this.events.forEach(function (event) { return event.impact(); });
    };
    return CompositeEvent;
}(GameEvent));
exports.CompositeEvent = CompositeEvent;
var TrafficJamEvent = /** @class */ (function (_super) {
    __extends(TrafficJamEvent, _super);
    function TrafficJamEvent() {
        return _super.call(this, "Пробка на дорозі", function () {
            console.log("Ви потрапили в пробку. Це займе додатковий час.");
        }) || this;
    }
    return TrafficJamEvent;
}(GameEvent));
exports.TrafficJamEvent = TrafficJamEvent;
var CarBreakdownEvent = /** @class */ (function (_super) {
    __extends(CarBreakdownEvent, _super);
    function CarBreakdownEvent() {
        return _super.call(this, "Поломка автомобіля", function () {
            console.log("На жаль, ваше таксі зламалося.");
        }) || this;
    }
    return CarBreakdownEvent;
}(GameEvent));
exports.CarBreakdownEvent = CarBreakdownEvent;
var WeatherChangeEvent = /** @class */ (function (_super) {
    __extends(WeatherChangeEvent, _super);
    function WeatherChangeEvent() {
        return _super.call(this, "Раптова зміна погоди", function () {
            console.log("Погода погіршилася, що може збільшити час поїздки.");
            return { timeImpact: 5 };
        }) || this;
    }
    return WeatherChangeEvent;
}(GameEvent));
exports.WeatherChangeEvent = WeatherChangeEvent;
var UnexpectedDetourEvent = /** @class */ (function (_super) {
    __extends(UnexpectedDetourEvent, _super);
    function UnexpectedDetourEvent() {
        return _super.call(this, "Неочікувана об'їзна дорога", function () {
            console.log("Доведеться їхати об'їзною дорогою.");
            return { timeImpact: 10, costImpact: 10 };
        }) || this;
    }
    return UnexpectedDetourEvent;
}(GameEvent));
exports.UnexpectedDetourEvent = UnexpectedDetourEvent;
