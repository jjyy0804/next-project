import hellobit from "@/app/public/hellobit.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-full flex-grow">
      <h1 className="text-3xl mb-10 text-center">
        미니 엘리스에 오신 것을 환영합니다!
      </h1>
      <Image src={hellobit} alt="hellobit" width={400} />
    </div>
  );
}
