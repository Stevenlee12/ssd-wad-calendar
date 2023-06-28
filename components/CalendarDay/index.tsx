import { ICalendarDayProps } from "./type";

export default function CalendarDay({ text }: ICalendarDayProps) {
  return (
    <th className="bg-black text-center text-gray-300 pt-3 pb-7">{text}</th>
  );
};
