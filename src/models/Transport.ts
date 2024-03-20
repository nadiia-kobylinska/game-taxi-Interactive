import { ITransport } from "../interfaces/ITransport";
import { GameEvent } from "./GameEvent";

export abstract class Transport implements ITransport {
    abstract type: string;
    abstract costMultiplier: number;

    abstract handleEvent(event: GameEvent): void;
}
