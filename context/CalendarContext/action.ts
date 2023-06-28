import { TCalendar } from "@utils/types";

export enum ECalendarActionType {
  SetEvent,
  RefetchCalendar,
}

export interface ISetCalendarEventAction {
  type: ECalendarActionType.SetEvent;
  payload: TCalendar[];
}

export interface IRefetchCalendar {
  type: ECalendarActionType.RefetchCalendar;
  payload: boolean;
}

export type TCalendarActions = ISetCalendarEventAction | IRefetchCalendar;