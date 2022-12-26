'use client';
import { Path, SubmitHandler, useForm } from 'react-hook-form';
import { FormTypes } from '../../types/form-types';
import JTextArea from '../input-field/textarea';
import JTextfield from '../input-field/textfield';
import JLogo from '../logo/logo';

type FieldType = {
  label: string;
  name: Path<FormTypes>;
  helperText?: string;
  isTextArea?: boolean;
  placeholder?: string;
  rows?: number;
};

interface JSuggestLayoutProps {
  onSubmit: SubmitHandler<FormTypes>;
  title: string;
  formFields: FieldType[];
}

const JSuggestLayout = ({
  onSubmit,
  title,
  formFields,
}: JSuggestLayoutProps) => {
  const { register, handleSubmit } = useForm<FormTypes>();

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <JLogo />
        <h1 className="font-medium text-xl whitespace-pre-wrap">{title}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {formFields.map(
          ({ label, name, helperText, isTextArea, placeholder, rows }, i) => {
            if (isTextArea)
              return (
                <JTextArea
                  key={i}
                  register={register}
                  label={label}
                  helperText={helperText}
                  placeholder={placeholder}
                  name={name}
                  rows={rows}
                />
              );
            else
              return (
                <JTextfield
                  key={i}
                  register={register}
                  label={label}
                  name={name}
                  helperText={helperText}
                  type={'text'}
                  placeholder={placeholder}
                  required={false}
                />
              );
          }
        )}
        <input
          type="submit"
          value="submit"
          className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded self-end cursor-pointer mt-4"
        />
      </form>
    </>
  );
};

export default JSuggestLayout;
