'use server';
import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface DeleteLecturePayload{
  courseId:string;
  lectureId:string;
}
export const deleteLecture = async ({
  courseId,
  lectureId,
}:DeleteLecturePayload) => {
  await fetch(
    `${API_URL}/api/courses/${courseId}/lectures/${lectureId}`,
    {
      method: 'DELETE',
    }
  );
  revalidateTag('lecture-data');
  redirect(`/courses/${courseId}`)
};