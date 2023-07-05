import { TAddEvent } from "@utils/types";
import { Dispatch, SetStateAction } from "react";

export interface IAddEventProps {
  date: string;
  addModalOpen: boolean;
  setAddModalOpen: Dispatch<SetStateAction<boolean>>;
  onAddEventSubmit: (event: TAddEvent) => void
}