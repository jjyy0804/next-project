import React from 'react';
import { API_URL } from '@/constants';
import MaterialContent from './MaterialContent';

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

interface Props {
  params: {
    courseId: string;
    lectureId: string;
    materialId: string
  };
};

const MaterialPage = async (
  {
    params: { courseId, lectureId, materialId },
  }: Props) => {
  const material = await getMaterial(
    courseId,
    lectureId,
    materialId
  );
  return (
    <MaterialContent
      courseId={courseId}
      lectureId={lectureId}
      material={{
        title: material.title,
        content: material.content,
        createdAt: material.createdAt,
        updatedAt: material.updatedAt,
        id: material._id,
      }}
    />
  );
};

export default MaterialPage;
