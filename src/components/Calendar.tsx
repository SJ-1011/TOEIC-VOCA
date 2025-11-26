import { useState } from "react";

interface CalendarProps {
  year?: number;
  month?: number;
}

export default function Calendar({ year, month }: CalendarProps) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(year ?? today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(month ?? today.getMonth());

  // 월 변경
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 해당 월의 첫 날 요일과 마지막 날짜 계산
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  // 달력 배열 생성
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= lastDate; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="calendar border-2 border-blue-200 p-8 my-4">
      <div className="header flex justify-between items-center mb-4">
        <button onClick={prevMonth}>◀</button>
        <h2 className="text-lg font-bold">
          {currentYear} - {currentMonth + 1}
        </h2>
        <button onClick={nextMonth}>▶</button>
      </div>
      <div className="grid grid-cols-7 text-center font-medium mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center">
        {calendarDays.map((day, idx) => (
          <div key={idx} className={`p-1`}>
            <div
              className={`w-full aspect-square flex items-center justify-center ${
                day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
                  ? "bg-blue-400 text-white rounded-full"
                  : ""
              }`}
            >
              {day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
