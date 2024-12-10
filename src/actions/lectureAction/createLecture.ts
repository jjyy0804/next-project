'use server';

import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface CreateLecturePayload {
  courseId: string;
  formData:FormData
}

export const createLecture = async ({
  courseId,
  formData
}: CreateLecturePayload) => {
  const response=await fetch(
    `${API_URL}/api/courses/${courseId}/lectures`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        title:formData.get('title')as string,
        description:formData.get('content')as string}),
    }
  );
  const { lectureId } = await response.json();
  revalidateTag('lecture-data');
  redirect(`/courses/${courseId}/lectures/${lectureId}`)
};
