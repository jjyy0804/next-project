import React from 'react'
import logo from "@/app/public/eliceCI.svg";
import Image from '../../node_modules/next/image';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full flex-grow">
      <Image src={logo} alt="logo" width={200} className="animate-pulse" />
    </div>
  )
}

export default Loading