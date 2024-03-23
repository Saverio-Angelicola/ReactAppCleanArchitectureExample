/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Action,
  ConfigureStoreOptions,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { counterSlice } from "./counter/core/counter.sclice";
import { CounterRepositoryInterface } from "./counter/core/domain/counter-repository.interface";

export type Dependencies = {
  counterRepository: CounterRepositoryInterface;
};

export type AppThunk<T> = () => ThunkAction<
  T,
  RootState,
  Dependencies,
  Action<string>
>;

export const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export const createStore = ({
  preloadedState,
  counterRepository,
}: {
  preloadedState?: ConfigureStoreOptions["preloadedState"];
} & Dependencies) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: {
            counterRepository,
          },
        },
      });
    },
    preloadedState,
  });

  return store;
};

export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
