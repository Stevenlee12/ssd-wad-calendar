import Image from "next/image";
import { IEventProps } from "./type";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useContext } from "react";
import { CalendarContext } from "context/CalendarContext";
import { LocalStorage } from "@utils/types";
import { setCalendar } from "context/CalendarContext/reducer";
import { convertTo12HourFormat, getCalendarData } from "@utils/helper";

export default function Event({ parentId, event }: IEventProps) {
  const { date, email, eventName, backgroundColor, id } = event;
  const { dispatch, state } = useContext(CalendarContext);
  // let calendar = getCalendarData() ?? [];
  let calendar = [...state.calendar ?? []];

  const handleDeleteEvent = () => {
    const selectedDate =
      calendar && calendar.findIndex((date) => date.id === parentId);

    if (selectedDate !== -1 && calendar) {
      calendar[selectedDate].events = calendar[selectedDate].events.filter(
        (event) => event.id !== id
      );
    }

    window.localStorage.setItem(
      LocalStorage.CALENDAR,
      JSON.stringify(calendar)
    );
    dispatch(setCalendar(calendar));
  };

  const handleEditEvent = () => {};

  return (
    <div
      className={`w-full relative group`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="absolute right-0 top-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-750">
        <button
          className="bg-black/50 text-white w-[32px] h-[32px] hover:bg-black/75"
          onClick={() => handleDeleteEvent()}
        >
          <AiTwotoneDelete className="w-full" />
        </button>
        <button
          className="bg-black/50 text-white w-[32px] h-[32px] hover:bg-black/75"
          onClick={() => handleEditEvent()}
        >
          <MdEdit className="w-full" />
        </button>
      </div>
      <div className="flex flex-col gap-1 items-start text-white p-2">
        <p className="text-sm w-full break-words">{eventName}</p>
        <p className="text-sm w-full break-words">{email}</p>
        <p className="text-sm w-full break-words">
          {convertTo12HourFormat(date)}
        </p>
      </div>
    </div>
  );
}
