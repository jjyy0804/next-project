import { API_URL } from '@/constants';
import React from 'react'
import Link from '../../../../node_modules/next/link';
interface Props {
  params: {
    roadmapId: string;
  };
};
const getRoadMapItems = async (
  roadmapId: string,
) => {
  const response = await fetch(`${API_URL}/api/roadmaps/${roadmapId}`);

  return response.json();
}
// const getCourses = async () => {
//   const response = await fetch(`${API_URL}/api/courses`);
//   return response.json();
// }

const RoadmapDetailpage = async ({ params: { roadmapId } }: Props) => {
  const roadmapsItem = await getRoadMapItems(roadmapId);
  const couresList = await roadmapsItem.courses;
  console.log(couresList);
  return (
    <div>
      <h1 className='text-center text-4xl mt-10 mb-3'>{roadmapsItem.title}</h1>
      <p className='text-center text-sm mb-10'>{roadmapsItem.description}</p>
      <ul className='flex items-center gap-3 flex-wrap'>
        {couresList.map((roadmapsItem: any, idx: number) => (
          <div className='flex items-center gap-3'>
            <li
              key={idx}
              className='flex flex-col px-3 py-5 border-2 border-purple-100 rounded-lg hover:border-purple-300'>
              <Link href={`/courses/${roadmapsItem._id}`}>
                <h1 className='font-bold'>{roadmapsItem.title}</h1>
                <p>{roadmapsItem.description}</p>
              </Link>
            </li>
            {idx !== couresList.length - 1 && <span>→</span>}
          </div>

        ))}
      </ul>
    </div>

  )
}

export default RoadmapDetailpage