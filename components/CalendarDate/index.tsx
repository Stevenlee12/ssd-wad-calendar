import EventCell from "@components/Event";
import { TEvent } from "@utils/types";
import { CalendarContext } from "context/CalendarContext";
import { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ICalendarCellProps } from "./type";

export default function CalendarDate({ date, id, onAddClick }: ICalendarCellProps) {
  // let event: TEvent[];
  const [events, setEvents] = useState<TEvent[]>([]);
  const { dispatch, state } = useContext(CalendarContext);

  useEffect(() => {
    const rawCalendar = window.localStorage.getItem("calendar");
    const calendar =
      rawCalendar &&
      JSON.parse(rawCalendar ?? []).filter((item: any) => item.id === id)[0];
    setEvents(calendar?.events && calendar?.events.map((item: TEvent) => item));
    
  }, [id, state.calendar]);

  return (
    <td className="bg-[#CCCCCC] text-black p-2 border border-gray-400">
      {date !== -1 && (
        <div className="flex flex-col gap-2 min-h-[120px] w-full h-full relative">
          <p className="text-lg">{date}</p>
          {events?.length !== 3 && <button
            className="flex items-center justify-center bg-black/30 rounded-md w-8 h-8 absolute top-0 right-0"
            onClick={() => onAddClick(date)}
          >
            <IoMdAdd className="text-white" />
          </button>}
          {events?.length !== 0 &&
            events?.map((event, idx) => {
              return <EventCell event={event} key={idx} />;
            })}
        </div>
      )}
    </td>
  );
}
