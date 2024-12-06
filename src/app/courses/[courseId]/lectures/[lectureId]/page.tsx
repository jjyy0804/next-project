import CustomeButton from '@/components/CustomeButton'
import { API_URL } from '@/constants';
import React from 'react'
import Link from '../../../../../../node_modules/next/link';

interface Props {
  params: {
    courseId: string;
    lectureId: string;
  };
};
const getLecture = async (
  courseId: string,
  lectureId: string,
) => {
  const response = await fetch(`${API_URL}/api/courses/${courseId}/lectures/${lectureId}`);
  return response.json();
}
const getMaterials = async (courseId: string, lectureId: string) => {
  const response = await fetch(`${API_URL}/api/courses/${courseId}/lectures/${lectureId}/materials`);
  return response.json();
}

const Lecturepage = async ({ params: { courseId, lectureId } }: Props) => {
  const lecture = await getLecture(
    courseId,
    lectureId,
  );
  const materials = await getMaterials(
    courseId,
    lectureId,
  );

  return (
    <div className="w-8/12 h-full px-5 pb-28 pt-8 mx-auto border border-gray-200 rounded-md">
      <Link href={`${API_URL}/courses/${courseId}`}>
        <CustomeButton
          title="← 과목으로 돌아가기"
          containerStyles="px-2 border border-[#a1a09b] rounded"
          textStyle="text-[#a1a09b]"
        />
      </Link>
      <h1 className="text-4xl mt-10 mb-5">{lecture.title}</h1>
      <div className="mb-4 flex justify-between">
        <div>
          <div>생성일 : {lecture.createdAt}</div>
          <div>최근 수정일 : {lecture.updatedAt}</div>
        </div>
        <div className="flex gap-3">
          <CustomeButton
            title="자료 생성하기"
            containerStyles="px-2 border border-[#688dd4] rounded"
            textStyle="text-[#688dd4]"

          />
          <CustomeButton
            title="수정"
            containerStyles="px-2 border border-[#50d71e] rounded"
            textStyle="text-[#50d71e]"

          />
          <CustomeButton
            title="삭제"
            containerStyles="px-2 border border-[#fd3f44] rounded"
            textStyle="text-[#fd3f44]"

          />
        </div>
      </div>
      <div className="pt-20 border-t border-t-slate-200">
        <ul className='flex flex-col gap-3'>
          {materials.map((material: any, idx: number) => (
            <li key={material._id}
              className='border-2 border-purple-100 rounded-lg hover:border-purple-300 p-3'
            >
              <Link href={`/courses/${courseId}/lectures/${lectureId}/materials/${material._id}`}>
                [자료{idx + 1}] {material.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Lecturepage
