import React from 'react'
import logo from "@/app/public/eliceCI.svg";
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';

const Navbar = () => {
  return (
    <nav className="w-full py-5 bg-gray-200">
      <div className=" mx-auto flex justify-between items-center px-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} />
        </Link>
        <div className="flex gap-5">
          <Link className="px-2 py-1 block" href={`/`}>
            홈
          </Link>
          <Link className="px-2 py-1 block" href={`/roadmaps`}>
            로드맵
          </Link>
          <Link className="px-2 py-1 block" href={`/courses`}>
            과목
          </Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar