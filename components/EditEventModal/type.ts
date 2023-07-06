import { TAddEvent, TEvent } from "@utils/types";
import { Dispatch, SetStateAction } from "react";

export interface IEditEventProps {
  date: string;
  event: TEvent;
  editModalOpen: boolean;
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
  onEditEventSubmit: (event: TAddEvent) => void
}