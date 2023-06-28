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
