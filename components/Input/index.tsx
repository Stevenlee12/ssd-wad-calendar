import { IInputProps } from "./type";

export default function Input({
  label,
  name,
  register,
  type,
  errors,
}: IInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name, {
          required: `${label} must not be empty`,
        })}
        name={name}
        type={type}
        className={"text-sm border border-gray-500 border-solid rounded-xl p-2"}
      />
      {errors[name]?.message && (
        <p className="text-red-600 text-xs">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  );
};