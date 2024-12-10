"use client"
import { updateMaterial } from '@/actions/materialAction/updateMaterial';
import CustomeButton from '@/components/CustomeButton';
import React, { useState } from 'react'
interface UpdateFormProps {
  initialTitle: string;
  initialContent: string;
  courseId: string;
  lectureId: string;
  materialId: string;
}
const UpdateForm = ({ initialTitle, initialContent, courseId, lectureId, materialId }: UpdateFormProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updateMaterial({
        courseId,
        lectureId,
        materialId,
        title,
        content,
      });
    } catch (error) {
      console.error('자료 수정 요청 실패:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto p-5 flex flex-col justify-center gap-3 w-7/12 border border-gray-300 rounded-xl'
    >
      <input
        type="text"
        name="materialName"
        value={title}
        onChange={handleTitleChange}
        className="outline-none border-gray-200 border h-16 px-3 rounded-sm focus:border-purple-400 focus:pt-3 focus:placeholder:text-xs focus:placeholder:-translate-y-5 placeholder:transition-all transition-all"
      />
      <textarea
        name="materialContent"
        value={content}
        onChange={handleContentChange}
        className="min-h-96 outline-none border-gray-200 border px-3 pt-3 rounded-sm transition-all focus:border-purple-400 resize-none"
      />
      <CustomeButton
        btnType='submit'
        title={isSubmitting ? '수정 중...' : '수정하기'}
        containerStyles="w-full bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-500 transition-all ease-in-out disabled:bg-purple-300"
      />
    </form>
  );
};
export default UpdateForm
