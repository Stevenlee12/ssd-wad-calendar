import EventCell from "@components/Event";
import { ICalendarCellProps } from "./type";
import { useEffect, useState } from "react";
import { TEvent } from "@utils/types";

export default function CalendarDate({ date, id }: ICalendarCellProps) {
  // let event: TEvent[];
  const [events, setEvents] = useState<TEvent[]>([]);

  useEffect(() => {
    const rawCalendar = window.localStorage.getItem('calendar')
    const calendar = rawCalendar && JSON.parse(rawCalendar ?? []).filter((item: any) => item.id === id)[0]
    setEvents(calendar?.events && calendar?.events.map((item: TEvent) => item))
    // console.log(calendar)
  }, [id])

  return (
    <td className="bg-[#CCCCCC] text-black p-2 border border-gray-400">
      {date !== -1 && (
        <button className="flex flex-col gap-2 min-h-[120px] w-full">
          <p className="text-lg">{date}</p>

          {events?.length !== 0 && events?.map((event, idx) => {
            return <EventCell event={event} key={idx} />;
          })}
        </button>
      )}
    </td>
  );
}
