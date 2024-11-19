import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  if (props.type === 'checkbox') {
    return <input {...props}
      className="rounded-md px-2 py-2 border border-gray-400 mr-auto w-6 h-6" />
  }
  return <input {...props}
    className="w-full rounded-md px-2 py-2 border border-gray-400" />
}

export function LabelAndInput(props: {
  id: string,
  label: string,
  placeholder?: string,
  inputProps: InputHTMLAttributes<HTMLInputElement>,
  type: HTMLInputTypeAttribute,
}) {
  const id = 'label-and-input-' + props.id;
  const horizontal = props.type === 'checkbox';
  return <div className="flex flex-col my-5">
    <div className={horizontal ? "flex flex-row items-center" : "flex flex-col"}>
      <label className={`font-semibold ${horizontal ? 'mr-2' : 'mb-2'}`}
        htmlFor={id}>
        {props.label}
      </label>
      <Input {...props.inputProps} type={props.type} id={id} placeholder={props.placeholder} />
    </div>
    {props.type === 'checkbox' && props.placeholder !== undefined &&
      <div className="text-sm mt-2 text-gray-800">
        {props.placeholder}
      </div>}
  </div>;
}
