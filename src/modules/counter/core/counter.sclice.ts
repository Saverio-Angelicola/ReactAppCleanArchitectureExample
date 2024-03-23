import {
  EntityState,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Counter } from "./domain/counter.types";
import { RootState } from "../../store";

const counterAdapter = createEntityAdapter({
  selectId: (counter: Counter) => counter.id,
  sortComparer: (a: Counter, b: Counter) => a.name.localeCompare(b.id),
});

export type CounterState = EntityState<Counter, string>;

const reducers = {
  LoadingCountersWithSuccess: counterAdapter.setAll,
  counterReceived(state, action) {
    counterAdapter.setAll(state, action.payload);
  },
};

export const counterSlice = createSlice({
  name: "counters",
  initialState: counterAdapter.getInitialState(),
  reducers,
});

console.log(counterAdapter.getInitialState({}, []));
export const { LoadingCountersWithSuccess } = counterSlice.actions;

export const { selectAll } = counterAdapter.getSelectors((state: RootState) => state.counters);
