'use client';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import JTextfield from '../../../components/input-field/textfield';
import { FormTypes } from '../../../types/form-types';

const SignIn = () => {
  const { register, handleSubmit } = useForm<FormTypes>();

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-3xl mt-4 mb-6">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <JTextfield
          register={register}
          label="email"
          name="email"
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
        />
        <Link href="/" className="underline self-end text-sm ">
          forget password
        </Link>
        <input
          type="submit"
          value="Sign in"
          className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded"
        />
      </form>
      <p className="text-base text-center mt-9">
        dont have account ?{' '}
        <Link href="/register" className="underline font-medium">
          Register
        </Link>
      </p>
    </>
  );
};

export default SignIn;
