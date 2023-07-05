import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
