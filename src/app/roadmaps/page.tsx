import { API_URL } from '@/constants';
import React from 'react'
import Link from '../../../node_modules/next/link';
const getRoadMaps = async () => {
  const response = await fetch(`${API_URL}/api/roadmaps`);
  return response.json();
}
const RoadMapPage = async () => {
  const roadmaps = await getRoadMaps();

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>로드맵</h1>
      <ul className='flex flex-col gap-3'>
        {roadmaps.map((roadmap: any, idx: number) =>
        (
          <li
            key={idx}
            className='flex flex-col p-3 border-2 border-purple-100 rounded-lg hover:border-purple-300'
          >
            <Link href={`${API_URL}/roadmaps/${roadmap._id}`}>
              <h1 className='font-bold'>{roadmap.title}</h1>
              <p>{roadmap.description}</p>
            </Link>
          </li>
        )
        )}
      </ul>
    </div>
  )
}

export default RoadMapPage