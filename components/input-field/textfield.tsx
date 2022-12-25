'use client';
import { HTMLInputTypeAttribute, MouseEvent, ReactNode, useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FormTypes } from '../../types/form-types';

interface JTextfieldProps {
  name: Path<FormTypes>;
  label: string;
  placeholder?: string;
  helperText?: string;
  type: HTMLInputTypeAttribute;
  prefixIcon?: ReactNode;
  register: UseFormRegister<FormTypes>;
  required: boolean;
}

const JTextfield = ({
  name,
  type,
  placeholder,
  register,
  required = false,
  helperText,
}: JTextfieldProps) => {
  const [toggleInput, setToggleInput] = useState(false);
  const isPasswordType = type === 'password';

  const handlePasswordToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleInput(!toggleInput);
  };

  const setPasswordType = (): HTMLInputTypeAttribute => {
    if (isPasswordType && toggleInput === false) {
      return 'password';
    }

    if (isPasswordType && toggleInput === true) {
      return 'text';
    }
    return type;
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <div>
        <p className="capitalize ">{name}</p>
        <span className="text-xs text-netural-40 leading-none whitespace-wrap ">
          {helperText}
        </span>
      </div>
      <input
        type={setPasswordType()}
        placeholder={placeholder}
        className={`rounded-lg px-4 h-[44px] ${
          isPasswordType ?? 'pr-10'
        } border-netural-10 border-[1px] focus:border-primary-10 outline-primary-10 transition-colors`}
        {...register(name, { required })}
      />
      {isPasswordType && (
        <button
          className="absolute w-[34px] h-[34px] bottom-[5px] right-[5px] grid place-items-center"
          onClick={handlePasswordToggle}
        >
          {toggleInput ? (
            <FiEye size={20} color="#87919E" />
          ) : (
            <FiEyeOff size={20} color="#87919E" />
          )}
        </button>
      )}
    </div>
  );
};
export default JTextfield;
