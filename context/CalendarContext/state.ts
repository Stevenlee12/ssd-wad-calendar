import { TCalendar } from "@utils/types";

export interface ICalendarContext {
  calendar: TCalendar[] | null;
  shouldRefetchCalendar: boolean;
}

export const initialCalendarState: ICalendarContext = {
  calendar: null,
  shouldRefetchCalendar: false,
}