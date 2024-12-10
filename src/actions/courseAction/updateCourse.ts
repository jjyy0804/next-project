'use server';

import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface UpdateLecturePayload {
  courseId: string;
  formData: FormData;
}

export const updateCourse= async ({
  courseId,
  formData
}: UpdateLecturePayload) => {
  await fetch(
    `${API_URL}/api/courses/${courseId}`,
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
  revalidateTag('course-data');
  redirect(`/courses/${courseId}`)
};
