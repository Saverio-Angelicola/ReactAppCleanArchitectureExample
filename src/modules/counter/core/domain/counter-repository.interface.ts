import { Counter } from "./counter.types";

export abstract class CounterRepositoryInterface {
    abstract GetCounters(): Promise<Counter[]>;
}