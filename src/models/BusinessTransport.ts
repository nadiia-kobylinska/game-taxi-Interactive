import { GameEvent } from "./GameEvent";
import { Transport } from "./Transport";

export class BusinessTransport extends Transport {
    type = "business";
    costMultiplier = 2.0;

    handleEvent(event: GameEvent): void {}
}
