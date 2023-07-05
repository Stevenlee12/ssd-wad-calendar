import { TEvent } from "@utils/types";

export interface ICalendarCellProps {
  date: number;
  // events: TEvent[];
  id: string;
  onAddClick: (date: number) => void
}