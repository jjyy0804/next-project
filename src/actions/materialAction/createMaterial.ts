'use server';

import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface CreateMaterialPayload {
  courseId: string;
  lectureId: string;
  formData:FormData
}

export const createMaterial = async ({
  courseId,
  lectureId,
  formData
}: CreateMaterialPayload) => {
  const response=await fetch(
    `${API_URL}/api/courses/${courseId}/lectures/${lectureId}/materials`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        title:formData.get('title')as string,
        content:formData.get('content')as string}),
    }
  );
  const { materialId } = await response.json();
  revalidateTag('material-data');
  redirect(`/courses/${courseId}/lectures/${lectureId}/materials/${materialId}`)
};
