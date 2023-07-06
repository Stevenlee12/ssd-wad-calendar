import Input from "@components/Input";
import Modal from "@components/Modal";
import { TAddEvent } from "@utils/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IEditEventProps } from "./type";

export default function EditEventModal({
  date,
  event,
  editModalOpen,
  setEditModalOpen,
  onEditEventSubmit,
}: IEditEventProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TAddEvent>({
    defaultValues: {
      email: event.email,
      eventName: event.eventName,
      id: event.id,
      time: event.date
    }
  });

  useEffect(() => {
    reset({
      email: event.email,
      eventName: event.eventName,
      id: event.id,
      time: event.date
    })
  }, [event]);

  const onSubmit = (value: TAddEvent) => {
    value['id'] = date
    onEditEventSubmit(value);
    reset();
    setEditModalOpen(false);
  };

  return (
    <Modal isModalOpen={editModalOpen} setModalOpen={setEditModalOpen}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-2xl font-bold">
          Edit event for{" "}
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
          Edit
        </button>
      </form>
    </Modal>
  );
}
