'use server';
import { API_URL } from '@/constants';
import { revalidateTag } from '../../../node_modules/next/cache';
import { redirect } from '../../../node_modules/next/navigation';

interface DeleteMaterialPayload{
  courseId:string;
  lectureId:string;
  materialId:string;
}
export const deleteMaterial = async ({
  courseId,
  lectureId,
  materialId,
}:DeleteMaterialPayload) => {
  await fetch(
    `${API_URL}/api/courses/${courseId}/lectures/${lectureId}/materials/${materialId}`,
    {
      method: 'DELETE',
    }
  );
  revalidateTag('material-data');
  redirect(`/courses/${courseId}/lectures/${lectureId}`)
};