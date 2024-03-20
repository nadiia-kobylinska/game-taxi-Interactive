import * as readline from "readline";
import { ITransport } from "./interfaces/ITransport";
import { TransportFactory } from "./factories/TransportFactory";
import { GameEvent, WeatherChangeEvent } from "./models/GameEvent";

class TaxiSimulatorGame {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    private budget: number = 100;
    private timeLeft: number = 30;
    private currentTransport: ITransport;

    constructor() {
        this.chooseTaxi();
    }

    chooseTaxi(): void {
        console.log("Виберіть тип таксі для поїздки:");
        console.log("1: Економ");
        console.log("2: Комфорт");
        console.log("3: Бізнес");

        this.rl.question("Ваш вибір (введіть номер): ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("Ви вибрали Економ клас.");
                    this.initiateRide("economy");
                    break;
                case "2":
                    console.log("Ви вибрали Комфорт клас.");
                    this.initiateRide("comfort");
                    break;
                case "3":
                    console.log("Ви вибрали Бізнес клас.");
                    this.initiateRide("business");
                    break;
                default:
                    console.log("Невідомий вибір. Спробуйте ще раз.");
                    this.chooseTaxi();
                    return;
            }
            this.rl.close();
        });
    }

    initiateRide(transportType: string): void {
        this.currentTransport = TransportFactory.createTransport(transportType);
        console.log(`Починається поїздка на ${this.currentTransport.type}.`);

        const event = new WeatherChangeEvent();
        this.interactWithDriver(event);
    }
    interactWithDriver(event: GameEvent): void {
        console.log(`Відбувається подія: ${event.description}`);
        const impactResult = event.impact();
        this.timeLeft -= impactResult.timeImpact || 0;
        this.budget -= impactResult.costImpact || 0;

        console.log(`Залишилось часу: ${this.timeLeft} хвилин. Ваш бюджет: ${this.budget} грн.`);
    }
}

new TaxiSimulatorGame();
