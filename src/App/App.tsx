/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCounters } from "../modules/counter/core/usecases/fetch-counters/fetch-counters.usecase";
import { AppDispatch } from "../modules/store";
import { useSelector } from "react-redux";
import { selectAll } from "../modules/counter/core/counter.sclice";

function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCounters());
  }, []);

  const counters = useSelector(selectAll);

  const countersRendering = counters.map((c) => (
    <>
      <span>{c.name}</span> <br />
    </>
  ));
  return <>{countersRendering}</>;
}

export default App;
