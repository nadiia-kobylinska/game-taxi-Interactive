import { GameEvent } from "./GameEvent";
import { Transport } from "./Transport";

export class EconomyTransport extends Transport {
    type = "economy";
    costMultiplier = 1.0;

    handleEvent(event: GameEvent): void {}
}
