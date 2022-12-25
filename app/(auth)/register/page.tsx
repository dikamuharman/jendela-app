'use client';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import JTextfield from '../../../components/input-field/textfield';
import { FormTypes } from '../../../types/form-types';

const Register = () => {
  const { register, handleSubmit } = useForm<FormTypes>();

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-3xl mt-4 mb-6">Register</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <JTextfield
          register={register}
          label="username"
          type="text"
          name="username"
          required
          placeholder="your username"
        />
        <JTextfield
          name="email"
          register={register}
          label="email"
          type="email"
          required
          placeholder="your email"
        />
        <JTextfield
          register={register}
          label="password"
          name="password"
          type="password"
          required
          placeholder="your password"
          helperText="Password length must be at least 8 characters. contains at least 1 uppercase letter, and a number"
        />
        <JTextfield
          register={register}
          label="confirm password"
          name="confirmPassword"
          type="password"
          required
          placeholder="confirm password"
        />

        <input
          type="submit"
          value="Sign up"
          className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded"
        />
      </form>
      <p className="text-base text-center mt-9">
        already have account ?{' '}
        <Link href="/login" className="underline font-medium">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default Register;
