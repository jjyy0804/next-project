'use server';

import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface UpdateLecturePayload {
  courseId: string;
  lectureId: string;
  formData: FormData;
}

export const updateLecture= async ({
  courseId,
  lectureId,
  formData
}: UpdateLecturePayload) => {
  await fetch(
    `${API_URL}/api/courses/${courseId}/lectures/${lectureId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        title: formData.get('title') as string, 
        description: formData.get('content')as string 
      }),
    }
  );
  revalidateTag('lecture-data');
  redirect(`/courses/${courseId}/lectures/${lectureId}`)
};
