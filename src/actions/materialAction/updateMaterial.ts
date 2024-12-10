'use server';

import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface UpdateMaterialPayload {
  courseId: string;
  lectureId: string;
  materialId: string;
  title: string;
  content: string;
}

export const updateMaterial = async ({
  courseId,
  lectureId,
  materialId,
  title,
  content,
}: UpdateMaterialPayload) => {
  await fetch(
    `${API_URL}/api/courses/${courseId}/lectures/${lectureId}/materials/${materialId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    }
  );
  revalidateTag('material-data');
  redirect(`/courses/${courseId}/lectures/${lectureId}/materials/${materialId}`)
};
