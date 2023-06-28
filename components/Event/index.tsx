import { IEventProps } from "./type";

export default function Event({ event }: IEventProps) {
  const { date, email, eventName, backgroundColor } = event;
  return (
    <div className={`text-white p-2 flex flex-col gap-1 w-full items-start`} style={{ backgroundColor: backgroundColor }}>
      <p className="text-sm">{eventName}</p>
      <p className="text-sm">{email}</p>
      <p className="text-sm">
        {/* {date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })} */}
        {date}
      </p>
    </div>
  );
}
