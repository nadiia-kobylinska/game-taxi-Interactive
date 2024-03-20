export class GameEvent {
    constructor(
        public description: string,
        public impact: Function,
    ) {}
}

export class CompositeEvent extends GameEvent {
    private events: GameEvent[] = [];

    constructor(description: string, events: GameEvent[]) {
        super(description, () => this.handleCompositeEvent());
        this.events = events;
    }

    handleCompositeEvent() {
        this.events.forEach((event) => event.impact());
    }
}

export class TrafficJamEvent extends GameEvent {
    constructor() {
        super("Пробка на дорозі", () => {
            console.log("Ви потрапили в пробку. Це займе додатковий час.");
        });
    }
}

export class CarBreakdownEvent extends GameEvent {
    constructor() {
        super("Поломка автомобіля", () => {
            console.log("На жаль, ваше таксі зламалося.");
        });
    }
}
export class WeatherChangeEvent extends GameEvent {
    constructor() {
        super("Раптова зміна погоди", () => {
            console.log("Погода погіршилася, що може збільшити час поїздки.");
            return { timeImpact: 5 };
        });
    }
}

export class UnexpectedDetourEvent extends GameEvent {
    constructor() {
        super("Неочікувана об'їзна дорога", () => {
            console.log("Доведеться їхати об'їзною дорогою.");
            return { timeImpact: 10, costImpact: 10 };
        });
    }
}
