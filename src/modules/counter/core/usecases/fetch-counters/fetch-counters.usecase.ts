import {
  AppDispatch,
  RootState,
  AppThunk,
  Dependencies,
} from "../../../../store";
import { LoadingCountersWithSuccess } from "../../counter.sclice";
import { Counter } from "../../domain/counter.types";

export const fetchCounters: AppThunk<Promise<void>> =
  () =>
  async (
    dispatch: AppDispatch,
    _getState: () => RootState,
    { counterRepository }: Dependencies
  ) => {
    const counters: Counter[] = await counterRepository.GetCounters();
    dispatch(LoadingCountersWithSuccess(counters));
  };
