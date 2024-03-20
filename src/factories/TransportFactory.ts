import { ITransport } from "../interfaces/ITransport";
import { ComfortTransport } from "../models/ComfortTransport";
import { EconomyTransport } from "../models/EconomyTransport";
import { BusinessTransport } from "../models/BusinessTransport";

export class TransportFactory {
    static createTransport(type: string): ITransport {
        switch (type) {
            case "economy":
                return new EconomyTransport();
            case "comfort":
                return new ComfortTransport();
            case "business":
                return new BusinessTransport();
            default:
                throw new Error("Unknown transport type");
        }
    }
}
