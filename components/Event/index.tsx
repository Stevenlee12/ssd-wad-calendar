import { IEventProps } from "./type";

export default function Event({ event }: IEventProps) {
  const { date, email, eventName, backgroundColor } = event;
  return (
    <div className={`w-full relative group`} style={{ backgroundColor: backgroundColor }}>
      <div className="absolute right-0 top-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-750">
        <button className="bg-black/50 w-[32px] h-[32px]">e</button>
        <button className="bg-black/50 w-[32px] h-[32px]">e</button>
      </div>
      <div className="flex flex-col gap-1 items-start text-white p-2">
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
    </div>
  );
}
