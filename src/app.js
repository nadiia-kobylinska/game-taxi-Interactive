"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TransportFactory_1 = require("./factories/TransportFactory");
var GameEvent_1 = require("./models/GameEvent");
var TaxiSimulatorGame = /** @class */ (function () {
    function TaxiSimulatorGame() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.budget = 100;
        this.timeLeft = 30;
        this.chooseTaxi();
    }
    TaxiSimulatorGame.prototype.chooseTaxi = function () {
        var _this = this;
        console.log("Виберіть тип таксі для поїздки:");
        console.log("1: Економ");
        console.log("2: Комфорт");
        console.log("3: Бізнес");
        this.rl.question("Ваш вибір (введіть номер): ", function (answer) {
            switch (answer) {
                case '1':
                    console.log("Ви вибрали Економ клас.");
                    _this.initiateRide('economy');
                    break;
                case '2':
                    console.log("Ви вибрали Комфорт клас.");
                    _this.initiateRide('comfort');
                    break;
                case '3':
                    console.log("Ви вибрали Бізнес клас.");
                    _this.initiateRide('business');
                    break;
                default:
                    console.log("Невідомий вибір. Спробуйте ще раз.");
                    _this.chooseTaxi();
                    return;
            }
            _this.rl.close();
        });
    };
    TaxiSimulatorGame.prototype.initiateRide = function (transportType) {
        this.currentTransport = TransportFactory_1.TransportFactory.createTransport(transportType);
        console.log("\u041F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0457\u0437\u0434\u043A\u0430 \u043D\u0430 ".concat(this.currentTransport.type, "."));
        var event = new GameEvent_1.WeatherChangeEvent();
        this.interactWithDriver(event);
    };
    TaxiSimulatorGame.prototype.interactWithDriver = function (event) {
        console.log("\u0412\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0434\u0456\u044F: ".concat(event.description));
        var impactResult = event.impact();
        this.timeLeft -= impactResult.timeImpact || 0;
        this.budget -= impactResult.costImpact || 0;
        console.log("\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0447\u0430\u0441\u0443: ".concat(this.timeLeft, " \u0445\u0432\u0438\u043B\u0438\u043D. \u0412\u0430\u0448 \u0431\u044E\u0434\u0436\u0435\u0442: ").concat(this.budget, " \u0433\u0440\u043D."));
    };
    return TaxiSimulatorGame;
}());
new TaxiSimulatorGame();
