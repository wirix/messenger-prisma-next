'use client';

import { FC } from 'react';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  rquired?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

export const Input: FC<InputProps> = ({ label, id, type, rquired, register, errors, disabled = false }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          autoComplete={id}
          type={type}
          disabled={disabled}
          {...register(id, { required: true })}
          className={clsx(
            `form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`,
            errors[id] && 'focus:ring-rose-500', disabled && 'opacity-50 cursor-default'
          )}
        />
      </div>
    </div>
  );
};
