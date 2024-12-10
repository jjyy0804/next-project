'use client';

import React, { FormEvent } from 'react';
import CustomeButton from '@/components/CustomeButton';

interface InputField {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  elementType: 'input' | 'textarea';
}


interface FormProps {
  fields: InputField[];
  onSubmit: (data: Record<string, string>) => void;
  buttonTitle: string;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, buttonTitle }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // 폼 데이터를 객체로 변환
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    onSubmit(data);
  };

  return (
    <form

      onSubmit={handleSubmit}
      className="mx-auto p-5 flex flex-col justify-center gap-3 w-7/12 border border-gray-300 rounded-xl"
    >
      {fields.map((field, idx) => {
        if (field.elementType === 'textarea') {
          return (
            <textarea
              key={idx}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="min-h-svh outline-none border-gray-200 border px-3 pt-3 rounded-sm transition-all focus:border-purple-400 resize-none"
            ></textarea>
          );
        }

        return (
          <input
            key={idx}
            type={field.type || 'text'}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className="outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all"
          />
        );
      })}
      <CustomeButton
        title={buttonTitle}
        containerStyles="bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-500 transition-all ease-in-out disabled:bg-purple-300"
      />
    </form>
  );
};

export default Form;
