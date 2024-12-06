import { API_URL } from '@/constants';
import React from 'react'
import UpdateForm from './UpdateForm';
interface Props {
  params: {
    courseId: string;
    lectureId: string;
    materialId: string
  };
};

const getMaterial = async (
  courseId: string,
  lectureId: string,
  materialId: string
) => {
  const response = await fetch(`${API_URL}/api/courses/${courseId}/lectures/${lectureId}/materials/${materialId}`, {
    next: {
      tags: ['material-data']
    }
  });
  return response.json();
}

const Editpage = async (
  {
    params: { courseId, lectureId, materialId },
  }: Props) => {
  const editMaterial = await getMaterial(courseId, lectureId, materialId);

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>수업 자료 수정</h1>
      <UpdateForm
        initialTitle={editMaterial.title}
        initialContent={editMaterial.content}
        courseId={courseId}
        lectureId={lectureId}
        materialId={materialId}
      />
    </div>
  )
}

export default Editpage