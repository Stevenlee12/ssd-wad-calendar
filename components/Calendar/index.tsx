import AddModal from "@components/AddEventModal";
import CalendarDate from "@components/CalendarDate";
import CalendarHeader from "@components/CalendarDay";
import EditEventModal from "@components/EditEventModal";
import {
  convertToTwoDigitString,
  generateRandomColor,
  getCalendarData,
  getCalendarMatrix,
  getCurrentMonth,
  getCurrentMonthAndYear,
} from "@utils/helper";
import { LocalStorage, TAddEvent, TCalendarCell, TEvent } from "@utils/types";
import { CalendarContext } from "context/CalendarContext";
import { setCalendar } from "context/CalendarContext/reducer";
import { useContext, useEffect, useState } from "react";

export default function Calendar() {
  const date = new Date();
  const [addDate, setAddDate] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editDate, setEditDate] = useState<TCalendarCell>();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const calendarMatrix = getCalendarMatrix();
  const data = getCalendarData() ?? [];

  const { dispatch, state } = useContext(CalendarContext);

  const onAddSubmit = (event: TAddEvent) => {
    console.log(data);
    // let calendar: TCalendar;

    let newEvent: TEvent = {
      id: Math.floor(Date.now() / 1000).toString(),
      eventName: event.eventName,
      email: event.email,
      date: event.time,
      backgroundColor: generateRandomColor(),
    };

    const selectedDate = data && data.findIndex((date) => date.id === event.id);

    if (selectedDate !== -1 && data) {
      data[selectedDate].events.push(newEvent);
    } else {
      data.push({
        id: event.id,
        events: [newEvent],
      });
    }
    window.localStorage.setItem(LocalStorage.CALENDAR, JSON.stringify(data));
    dispatch(setCalendar(data));
  };

  useEffect(() => {
    const data = window.localStorage.getItem("calendar");
    const tempData = data && JSON.parse(data ?? []);
  }, []);

  return (
    <div className="overflow-x-auto min-w-[800px]">
      <p className="text-center font-bold py-4 text-3xl">{getCurrentMonth()}</p>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            {days.map((day) => {
              return <CalendarHeader text={day} />;
            })}
          </tr>
        </thead>
        <tbody>
          {calendarMatrix.map((item, idx) => {
            return (
              <tr key={idx}>
                {item.map((subItem, idx) => {
                  const { month, year } = getCurrentMonthAndYear();

                  let id = `${convertToTwoDigitString(
                    subItem
                  )}/${convertToTwoDigitString(
                    month
                  )}/${convertToTwoDigitString(year)}`;
                  // console.log(id, 22345)
                  return (
                    <CalendarDate
                      date={subItem}
                      key={idx}
                      id={id}
                      onAddClick={(date) => {
                        setAddModalOpen(true);
                        setAddDate(id);
                      }}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddModal
        date={addDate}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
        onAddEventSubmit={onAddSubmit}
      />
      {editDate && (
        <EditEventModal
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
          onEditEventSubmit={onEditSubmit}
          date={editDate.id}
          event={editDate.event}
        />
      )}
    </div>
  );
}
