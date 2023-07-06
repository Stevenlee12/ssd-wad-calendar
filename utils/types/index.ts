export type TEvent = {
  id: string;
  eventName: string;
  email: string;
  date: string;
  backgroundColor: string;
};

export type TCalendar = {
  id: string;
  events: TEvent[];
}

export type TAddEvent = {
  id: string,
  eventName: string,
  email: string,
  time: string,
}

export type TCalendarCell = {
  id: string;
  event: TEvent;
}

export enum LocalStorage {
  CALENDAR = "calendar"
}