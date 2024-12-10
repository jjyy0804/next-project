import CustomeButton from '@/components/CustomeButton';
import { API_URL } from '@/constants';
import React from 'react'
import Link from '../../../../node_modules/next/link';
interface Props {
  params: {
    courseId: string;
  };
};
const getCourses = async (
  courseId: string,
) => {
  const response = await fetch(`${API_URL}/api/courses/${courseId}`, {
    next: {
      tags: ['course-data']
    }
  });
  return response.json();
}
const getLecture = async (
  courseId: string,
) => {
  const response = await fetch(`${API_URL}/api/courses/${courseId}/lectures`, {
    next: {
      tags: ['lecture-data']
    }
  });
  return response.json();
}
const Coursepage = async ({ params: { courseId } }: Props) => {
  const coures = await getCourses(courseId);
  const lectures = await getLecture(courseId);
  console.log(lectures);
  return (
    <div>
      <h1 className='text-center text-4xl mt-10 mb-5'>{coures.title}</h1>
      <p className='text-center text-sm mb-10'>{coures.description}</p>
      <div className='w-full flex justify-end pb-4 gap-2'>
        <Link href={`${API_URL}/courses/${courseId}/lectures/create`}>
          <CustomeButton
            title="강의 생성"
            containerStyles="p-3 border border-[#688dd4] rounded"
            textStyle="text-[#688dd4]"
          />
        </Link>
        <Link href={`${API_URL}/courses/${courseId}/update`}>
          <CustomeButton
            title="과목 수정"
            containerStyles="p-3 border border-[#50d71e] rounded"
            textStyle="text-[#50d71e]"
          />
        </Link>
        <CustomeButton
          title="과목 삭제"
          containerStyles="p-3 border border-[#fd3f44] rounded"
          textStyle="text-[#fd3f44]"

        />
      </div>
      <ul className='flex flex-col gap-3'>
        {lectures.map((lecture: any, idx: number) => (
          <li
            key={idx}
            className='border-2 border-purple-100 rounded-lg hover:border-purple-300 flex flex-col p-3'
          >
            <Link href={`${API_URL}/courses/${courseId}/lectures/${lecture._id}`}>
              <h1 className='font-bold'>{idx + 1}. {lecture.title}</h1>
              <p>{lecture.description}</p>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Coursepage
