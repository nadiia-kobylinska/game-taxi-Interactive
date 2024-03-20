import { GameEvent } from "../models/GameEvent";

export interface ITransport {
    type: string;
    costMultiplier: number;
    handleEvent(eventType: GameEvent): void;
}
