import { TMonthYear } from "./type";

export function getCurrentMonth(): string {
  const date = new Date();

  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

export function getCurrentMonthAndYear(): TMonthYear {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  return {
    month: currentMonth,
    year: currentYear,
  };
};

export function getDateRangeForMonth(month: number, year: number): string[] {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  const startDateString = startDate.toISOString().split("T")[0];
  const endDateString = endDate.toISOString().split("T")[0];

  return [startDateString, endDateString];
};

export function getCalendarMatrix(): number[][] {
  let endDateOfEveryMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const { year, month } = getCurrentMonthAndYear();
  console.log(year, month, 1234, new Date(year, month - 1, 1).getDay());

  // leap year checker
  if (month == 2) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      endDateOfEveryMonths[1] += 1;
    }
  }

  let matrix: number[][] = [];
  const maxDays = endDateOfEveryMonths[month - 1];
  var firstDay = new Date(year, month - 1, 1).getDay(); // -1 because month start from 0.

  var counter = 1;
  for (var row = 1; row < 7; row++) {
    matrix[row] = [];
    for (var col = 0; col < 7; col++) {
      matrix[row][col] = -1;
      if ((row === 1 && col >= firstDay) || (row > 1 && counter <= maxDays)) {
        matrix[row][col] = counter++;
      }
    }
  }

  return matrix.map((item) =>
    item.every((value) => value === -1) ? [] : item
  );
};

export function convertToTwoDigitString(number: number): string {
  return number < 10 ? `0${number}` : number.toString();
};

export function randomColorGenerator() {
  console.log('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
  // return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
