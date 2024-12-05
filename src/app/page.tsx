import hellobit from "@/app/public/hellobit.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>미니 엘리스에 오신 것을 환영합니다!</h1>
      <Image src={hellobit} alt="hellobit" width={400} />
    </div>
  );
}
