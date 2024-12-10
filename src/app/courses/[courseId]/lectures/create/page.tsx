'use client';
import { createLecture } from '@/actions/lectureAction/createLecture';
import CustomeButton from '@/components/CustomeButton';
import Form from '@/components/Form'
import React, { useState } from 'react'

interface Prop {
  params: {
    courseId: string
  }
}

const LectureCreatepage = ({ params: { courseId } }: Prop) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      await createLecture({
        courseId,
        formData
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }

  }

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>강의 생성</h1>
      <form
        onSubmit={handleSubmit}
        className='mx-auto p-5 flex flex-col justify-center gap-3 w-7/12 border border-gray-300 rounded-xl'
      >
        <input
          placeholder='강의명 *'
          type="text"
          name='title'
          className='outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all' />
        <input
          placeholder='강의 요약 *'
          type="text"
          name='content'
          className='outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all' />
        <CustomeButton
          title={loading ? '생성 중' : '생성하기'}
          isDisabled={loading ? false : true}
          btnType='submit'
          containerStyles='bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-500 transition-all ease-in-out disabled:bg-purple-300' />
      </form>

      {/* <Form
        fields={[
          { elementType: 'input', name: 'title', type: 'text', placeholder: '강의명 *', required: true },
          { elementType: 'input', name: 'description', type: 'text', placeholder: '강의 요약 *', required: true },
        ]}
        onSubmit={handleSubmit}
        buttonTitle="생성하기"
      /> */}
    </div>
  )
}

export default LectureCreatepage
