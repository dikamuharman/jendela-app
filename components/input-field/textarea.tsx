'use client';

import { Path, UseFormRegister } from 'react-hook-form';
import { FormTypes } from '../../types/form-types';

interface JTextAreaProps {
  label: string;
  name: Path<FormTypes>;
  helperText?: string;
  register: UseFormRegister<FormTypes>;
  placeholder?: string;
  rows?: number;
}

const JTextArea = ({
  label,
  helperText,
  name,
  register,
  placeholder,
  rows = 6,
}: JTextAreaProps) => {
  return (
    <div>
      <p className="capitalize ">{label}</p>
      <span className="text-xs text-netural-40 leading-none whitespace-wrap mb-2 block">
        {helperText}
      </span>

      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className={`rounded-lg px-4 py-3 overflow-auto border-netural-10 border-[1px]  focus:border-primary-50 outline-none transition-colors w-full`}
      />
    </div>
  );
};

export default JTextArea;
