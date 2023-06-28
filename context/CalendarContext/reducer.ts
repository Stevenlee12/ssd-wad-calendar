import { TCalendar } from "@utils/types";
import { ECalendarActionType, IRefetchCalendar, ISetCalendarEventAction, TCalendarActions } from "./action";
import { ICalendarContext } from "./state";

export function calendarReducer(
  state: ICalendarContext,
  action: TCalendarActions,
): ICalendarContext {
  switch (action.type) {
    case ECalendarActionType.SetEvent:
      return { ...state, calendar: action.payload };
    case ECalendarActionType.RefetchCalendar:
      return { ...state, shouldRefetchCalendar: action.payload };
    default:
      return state
  }
};

export const setCalendar = (calendar: TCalendar[]): ISetCalendarEventAction => ({
  type: ECalendarActionType.SetEvent,
  payload: calendar,
});

export const RefetchCalendar = (shouldRefetchCalendar: boolean): IRefetchCalendar => ({
  type: ECalendarActionType.RefetchCalendar,
  payload: shouldRefetchCalendar,
});