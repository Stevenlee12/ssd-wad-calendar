import CalendarDate from "@components/CalendarDate";
import CalendarHeader from "@components/CalendarDay";
import { convertToTwoDigitString, getCalendarMatrix, getCurrentMonth, getCurrentMonthAndYear, randomColorGenerator } from "@utils/helper";
import { TCalendar } from "@utils/types";
import { CalendarContext } from "context/CalendarContext";
import { useContext, useEffect } from "react";

export default function Calendar() {
  const date = new Date();
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

  const { dispatch, state } = useContext(CalendarContext);

  useEffect(() => {
    const data = window.localStorage.getItem("calendar");
    const tempData = data && JSON.parse(data ?? []);
    // console.log(tempData, 123);
    // const item: TCalendar = {
    //   id: "07062023",
    //   events: [{
    //     id:  Math.floor(Date.now() / 1000).toString(),
    //     eventName: "Belajar",
    //     email: "steven@gmail.com",
    //     date: "03:00 PM",
    //     backgroundColor: randomColorGenerator()
    //   },
    //   {
    //     id: "2023",
    //     eventName: "Belajar-1",
    //     email: "steven@gmail.com",
    //     date: "04:00 PM",
    //     backgroundColor: randomColorGenerator()
    //   }],
    // };

    // window.localStorage.setItem("calendar", JSON.stringify([...tempData, item]))
    // window.localStorage.setItem("calendar", JSON.stringify([item]))
  }, []);

  return (
    <div className="overflow-x-auto">
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
                  const { month, year } = getCurrentMonthAndYear()
                  console.log(convertToTwoDigitString(subItem) ,convertToTwoDigitString(month) ,convertToTwoDigitString(year))
                  let id = convertToTwoDigitString(subItem) + convertToTwoDigitString(month) + convertToTwoDigitString(year)
                  // console.log(id, 22345)
                  return <CalendarDate date={subItem} key={idx} id={id} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
