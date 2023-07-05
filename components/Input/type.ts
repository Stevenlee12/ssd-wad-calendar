import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  type: HTMLInputTypeAttribute;
  errors: FieldErrors<any>;
}