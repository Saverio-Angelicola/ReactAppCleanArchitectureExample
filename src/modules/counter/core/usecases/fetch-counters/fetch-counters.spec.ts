import { beforeEach, describe, expect, test } from "vitest";
import { AppStore, createStore } from "../../../../store";
import CounterRepositoryInMemory from "../../../adapters/counter-repository.in-memory";
import { fetchCounters } from "./fetch-counters.usecase";

describe("fetch counters tests", () => {
  let store: AppStore;
  beforeEach(() => {
    store = createStore({
      counterRepository: new CounterRepositoryInMemory([
        { id: crypto.randomUUID(), name: "counter1", state: 0 },
        { id: crypto.randomUUID(), name: "counter2", state: 0 },
      ]),
    });
  });

  test("should have two counter", async () => {
    expect(store.getState().counters.ids.length).toBe(0);
    await store.dispatch(fetchCounters());
    expect(store.getState().counters.ids.length).toBe(2);
  });
});
