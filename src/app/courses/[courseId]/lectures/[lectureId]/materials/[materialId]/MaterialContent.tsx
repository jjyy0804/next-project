"use client";

import React from 'react';
import CustomeButton from '@/components/CustomeButton';
import { useRouter } from '../../../../../../../../node_modules/next/navigation';
import Link from '../../../../../../../../node_modules/next/link';
import { deleteMaterial } from '@/actions/materialAction/deleteMaterial';


interface MaterialProps {
  courseId: string,
  lectureId: string,
  material: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
}

const MaterialContent = ({ courseId, lectureId, material }: MaterialProps) => {
  const router = useRouter();

  // 자료 수정
  const handleEditClick = () => {
    router.push(`/courses/${courseId}/lectures/${lectureId}/materials/${material.id}/update`);
  };
  // 자료 삭제
  const handleDelete = async () => {
    try {
      if (confirm('정말 삭제하시겠습니까?')) {
        await deleteMaterial({
          courseId,
          lectureId,
          materialId: material.id,
        });
        alert('자료가 삭제되었습니다.');
      }
      return;
    } catch (error) {
      console.error('자료 삭제 실패:', error);
      alert('자료 삭제에 실패했습니다.');
    }
  };

  return (
    <div className="w-8/12 h-full px-5 pb-28 pt-8 mx-auto border border-gray-200 rounded-md">
      <Link href={`/courses/${courseId}/lectures/${lectureId}`}>
        <CustomeButton
          title="← 강의로 돌아가기"
          containerStyles="px-2 border border-[#a1a09b] rounded"
          textStyle="text-[#a1a09b]"
        />
      </Link>

      <h1 className="text-4xl mt-10 mb-5">{material.title}</h1>
      <div className="mb-4 flex justify-between">
        <div>
          <div>생성일 : {material.createdAt}</div>
          <div>최근 수정일 : {material.updatedAt}</div>
        </div>
        <div className="flex gap-3">
          <CustomeButton
            title="수정"
            containerStyles="px-2 border border-[#50d71e] rounded"
            textStyle="text-[#50d71e]"
            handleClick={handleEditClick}
          />
          <CustomeButton
            title="삭제"
            containerStyles="px-2 border border-[#fd3f44] rounded"
            textStyle="text-[#fd3f44]"
            handleClick={handleDelete}
          />
        </div>
      </div>
      <div className="pt-20 border-t border-t-slate-200">
        <p>{material.content}</p>
      </div>
    </div>
  );
};

export default MaterialContent;
