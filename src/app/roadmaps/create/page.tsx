"use client"
import Form from '@/components/Form'
import React from 'react'

const roadmapCreatepage = () => {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('Submitted Data:', data);
    // 서버 요청 로직 추가

  };
  return (
    <div>
      <h1 className='text-center text-4xl my-10'>로드맵 생성</h1>
      <div>
        <Form
          fields={[
            { elementType: 'input', name: 'title', type: 'text', placeholder: '로드맵명 *', required: true },
            { elementType: 'input', name: 'description', type: 'text', placeholder: '한 줄 소개 *', required: true },
          ]}
          onSubmit={handleSubmit}
          buttonTitle="생성하기"
        />
      </div>
    </div>
  )
}

export default roadmapCreatepage
