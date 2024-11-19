import { InputHTMLAttributes } from 'react';
import { SWRConfiguration } from 'swr';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  if (props.type === 'checkbox') {
    return <input {...props}
      className={`rounded-md px-2 py-2 border border-gray-400 mr-auto w-6 h-6 ${props.className}`} />;
  }
  const readOnlyClassNames = props.readOnly ? 'bg-gray-200 cursor-not-allowed' : '';
  return <input {...props}
    className={`w-full rounded-md px-2 py-2 border border-gray-400 ${readOnlyClassNames} ${props.className}`} />;
}

export function Label(props: { htmlFor?: string, children: React.ReactNode, horizontal?: boolean }) {
  return <label htmlFor={props.htmlFor}
    className={`inline-block font-semibold ${props.horizontal ? 'mr-2' : 'mb-2'}`}>
    {props.children}
  </label>;
}

export function LabelAndInput(props: {
  id: string,
  label: string,
  numeric?: boolean,
  placeholder?: string,
  inputProps: InputHTMLAttributes<HTMLInputElement>,
  type: 'text' | 'checkbox',
}) {
  const id = 'label-and-input-' + props.id;
  const horizontal = props.type === 'checkbox';
  return <div className="flex flex-col my-5">
    <div className={horizontal ? "flex flex-row items-center" : "flex flex-col"}>
      <Label htmlFor={id} horizontal={horizontal}>
        {props.label}
      </Label>
      <Input {...props.inputProps} type={props.type} id={id}
        placeholder={props.placeholder} className={props.numeric ? 'tabular-nums' : ''} />
    </div>
    {props.type === 'checkbox' && props.placeholder !== undefined &&
      <div className="text-sm mt-2 text-gray-800">
        {props.placeholder}
      </div>}
  </div>;
}

export function FormButtonGroup({ children }: { children: React.ReactNode }) {
  return <>
    <hr className="my-8" />
    <div className="flex justify-end gap-8">
      {children}
    </div>
  </>;
}

export const FormSWRConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
