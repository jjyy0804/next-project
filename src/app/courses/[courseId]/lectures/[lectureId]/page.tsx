"use client"
import { deleteLecture } from '@/actions/lectureAction/deleteLecture';
import CustomeButton from '@/components/CustomeButton';
import { API_URL } from '@/constants';
import Link from '../../../../../../node_modules/next/link';

interface Props {
  params: {
    courseId: string;
    lectureId: string;
  };
}

interface Material {
  _id: string;
  title: string;
}

const getLectureAndMaterials = async (courseId: string, lectureId: string) => {
  const [lecture, materials] = await Promise.all([
    fetch(`${API_URL}/api/courses/${courseId}/lectures/${lectureId}`, {
      next: {
        tags: ['lecture-data']
      }
    }).then((res) =>
      res.json()
    ),
    fetch(`${API_URL}/api/courses/${courseId}/lectures/${lectureId}/materials`, {
      next: {
        tags: ['material-data']
      }
    }).then((res) =>
      res.json()
    ),
  ]);

  return { lecture, materials };
};

const Lecturepage = async ({ params: { courseId, lectureId } }: Props) => {
  const { lecture, materials } = await getLectureAndMaterials(courseId, lectureId);

  const handleDelete = async () => {
    try {
      if (confirm('삭제하시겠습니까?')) {
        await deleteLecture({
          courseId,
          lectureId
        });
        alert('강의가 삭제되었습니다.');
      }
      return;
    } catch (error) {
      console.error('강의 삭제 실패:', error);
      alert('강의 삭제에 실패했습니다.');
    }

  }
  return (
    <div className="w-8/12 h-full px-5 pb-28 pt-8 mx-auto border border-gray-200 rounded-md">
      <Link href={`/courses/${courseId}`}>
        <CustomeButton
          title="← 과목으로 돌아가기"
          containerStyles="px-2 border border-[#a1a09b] rounded"
          textStyle="text-[#a1a09b]"
        />
      </Link>
      <div className='flex flex-col items-center'>
        <h1 className="text-4xl mt-10 mb-5">{lecture.title}</h1>
        <p className='text-center text-sm mb-10'>{lecture.description}</p>
      </div>
      <div className="mb-4 flex justify-between">
        <div className="w-full flex justify-end pb-4 gap-2">
          <Link href={`/courses/${courseId}/lectures/${lectureId}/materials/create`}>
            <CustomeButton
              title="자료 생성"
              containerStyles="p-3 border border-[#688dd4] rounded"
              textStyle="text-[#688dd4]"
            />
          </Link>
          <Link href={`/courses/${courseId}/lectures/${lectureId}/update`}>
            <CustomeButton
              title="강의 수정"
              containerStyles="p-3 border border-[#50d71e] rounded"
              textStyle="text-[#50d71e]"
            />
          </Link>
          <CustomeButton
            handleClick={handleDelete}
            title="강의 삭제"
            containerStyles="p-3 border border-[#fd3f44] rounded"
            textStyle="text-[#fd3f44]"
          />
        </div>
      </div>
      <div className="pt-20 border-t border-t-slate-200">
        {materials.length > 0 ?
          <ul className="flex flex-col gap-3">
            {materials.map((material: Material, idx: number) => (
              <li
                key={material._id}
                className="border-2 border-purple-100 rounded-lg hover:border-purple-300 p-3"
              >
                <Link href={`/courses/${courseId}/lectures/${lectureId}/materials/${material._id}`}>
                  [자료 {idx + 1}] {material.title}
                </Link>
              </li>
            ))}
          </ul>
          :
          <div>
            <h1 className='font-bold text-lg mb-3'>수업 자료</h1>
            <div className='border border-gray-200 p-3'>
              <h4>수업 자료가 없습니다.</h4>
            </div>
          </div>}

      </div>
    </div>
  );
};

export default Lecturepage;
