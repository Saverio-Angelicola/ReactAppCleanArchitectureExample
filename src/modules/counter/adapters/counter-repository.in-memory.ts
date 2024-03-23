import { CounterRepositoryInterface } from "../core/domain/counter-repository.interface";
import { Counter } from "../core/domain/counter.types";

export default class CounterRepositoryInMemory implements CounterRepositoryInterface {
    private counters: Counter[] = [];

    constructor(counters: Counter[])
    {
        this.counters = counters;
    }

    GetCounters(): Promise<Counter[]> {
        return Promise.resolve(this.counters);
    }

}