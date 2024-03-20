import { GameEvent } from "./GameEvent";
import { Transport } from "./Transport";

export class ComfortTransport extends Transport {
    type = "comfort";
    costMultiplier = 1.5;

    handleEvent(event: GameEvent): void {}
}
