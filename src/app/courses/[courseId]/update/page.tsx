"use client"
import { updateCourse } from '@/actions/courseAction/updateCourse'
import CustomeButton from '@/components/CustomeButton'
import { API_URL } from '@/constants'
import React from 'react'
interface Prop {
  params: {
    courseId: string;
  }
}
const getCourse = async (courseId: string) => {
  const response = await fetch(`${API_URL}/api/courses/${courseId}`);
  return response.json();
}

const CourseUpdatePage = async ({ params: { courseId } }: Prop) => {
  const course = await getCourse(courseId)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateCourse({
      courseId,
      formData
    });
  }
  return (
    <div>
      <h1 className='text-center text-4xl my-10'>과목 수정</h1>
      <form
        onSubmit={handleSubmit}
        className='mx-auto p-5 flex flex-col justify-center gap-3 w-7/12 border border-gray-300 rounded-xl'>
        <input
          type="text"
          name='title'
          defaultValue={course.title}
          className='outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all' />
        <input
          type="text"
          name='content'
          defaultValue={course.description}
          className='outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all' />
        <CustomeButton
          title='수정하기'
          btnType='submit'
          containerStyles='bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-500 transition-all ease-in-out disabled:bg-purple-300' />
      </form>
    </div>
  )
}

export default CourseUpdatePage
