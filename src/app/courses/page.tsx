import CustomeButton from '@/components/CustomeButton';
import { API_URL } from '@/constants';
import React from 'react'
import Link from '../../../node_modules/next/link';
const getAllCourse = async () => {
  const response = await fetch(`${API_URL}/api/courses`);
  return response.json();

}
const page = async () => {
  const courseList = await getAllCourse();

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>과목</h1>
      <div className='w-full flex justify-end pb-4'>
        <CustomeButton title='과목 생성하기' />
      </div>
      <ul className='flex flex-col gap-3'>
        {courseList.map((course: any, idx: number) =>
        (
          <li
            key={idx}
            className='border-2 border-purple-100 rounded-lg hover:border-purple-300 flex flex-col p-3'
          >
            <Link href={`/courses/${course._id}`}>
              <h1 className='font-bold'>{course.title}</h1>
              <p>{course.description}</p>

            </Link>

          </li>
        )
        )}
      </ul>
    </div>
  )
}

export default page