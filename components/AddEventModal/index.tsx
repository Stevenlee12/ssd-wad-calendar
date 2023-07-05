import Input from "@components/Input";
import Modal from "@components/Modal";
import { TAddEvent } from "@utils/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IAddEventProps } from "./type";

export default function AddEventModal({
  date,
  addModalOpen,
  setAddModalOpen,
  onAddEventSubmit,
}: IAddEventProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TAddEvent>({
    defaultValues: {
      id: date,
    }
  });

  useEffect(() => {
    // setMDate(new Date(today.getFullYear(), today.getMonth(), date));
  }, [date]);

  const onSubmit = (value: TAddEvent) => {
    const [hours, minutes] = value.time.split(":");
    value['id'] = date
    onAddEventSubmit(value);
    reset();
    setAddModalOpen(false);
  };

  return (
    <Modal isModalOpen={addModalOpen} setModalOpen={setAddModalOpen}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-2xl font-bold">
          Add event for{" "}
          {date}
        </p>
        <Input
          register={register}
          label="Event"
          name="eventName"
          errors={errors}
          type="text"
        />
        <Input
          register={register}
          label="E-mail"
          name="email"
          errors={errors}
          type="email"
        />
        <Input
          register={register}
          label="Time"
          name="time"
          errors={errors}
          type="time"
        />
        <button className="text-sm text-white p-3 mt-4 rounded-xl bg-black">
          Add
        </button>
      </form>
    </Modal>
  );
}
