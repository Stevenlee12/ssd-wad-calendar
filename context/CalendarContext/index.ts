import { Dispatch, createContext } from "react";
import { TCalendarActions } from "./action";
import { ICalendarContext, initialCalendarState } from "./state";

export const CalendarContext = createContext<{ state: ICalendarContext; dispatch: Dispatch<TCalendarActions> }>({
  state: initialCalendarState,
  dispatch: () => undefined,
});