"use client"
import { createMaterial } from '@/actions/materialAction/createMaterial'
import Form from '@/components/Form'
import React, { useState } from 'react'

interface Props {
  params: {
    courseId: string;
    lectureId: string;
  }
}
const MaterialCreatepage = ({ params: { courseId, lectureId } }: Props) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await createMaterial({
      courseId,
      lectureId,
      formData
    });
  }

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>수업 자료 생성</h1>
      <form
        onSubmit={handleSubmit}
        className='mx-auto p-5 flex flex-col justify-center gap-3 w-7/12 border border-gray-300 rounded-xl'
      >
        <input
          type="text"
          name='title'
          placeholder='수업 자료명 *'
          className='outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all' />
        <textarea
          name='content'
          placeholder='내용 *'
          className='outline-none border-gray-200 border px-3 pt-3 rounded-sm transition-all focus:border-purple-400' />
        <button
          className='bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-500 transition-all ease-in-out disabled:bg-purple-300'>생성</button>
      </form>
      {/* <Form
        fields={[
          { elementType: 'input', name: 'title', type: 'text', placeholder: '수업 자료명 *', required: true },
          { elementType: 'textarea', name: 'description', type: 'text', placeholder: '내용 *', required: true },
        ]}
        onSubmit={handleSubmit}
        buttonTitle="생성하기"
      /> */}

    </div>
  )
}

export default MaterialCreatepage