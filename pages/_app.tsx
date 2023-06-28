import { useMemo, useReducer } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { calendarReducer } from "context/CalendarContext/reducer";
import { initialCalendarState } from "context/CalendarContext/state";
import { CalendarContext } from "context/CalendarContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [calendarState, calendarDispatch] = useReducer(
    calendarReducer,
    initialCalendarState
  );

  const calendarContextValue = useMemo(
    () => ({ state: calendarState, dispatch: calendarDispatch }),
    [calendarState, calendarDispatch]
  );

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      <Component {...pageProps} />
    </CalendarContext.Provider>
  );
}

export default MyApp;
