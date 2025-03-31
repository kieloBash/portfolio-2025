import Navbar from "@/components/navbar";
import FirstWindow from "@/components/windows/1";
import SecondWindow from "@/components/windows/2";
import ThirdWindow from "@/components/windows/3";
import FourthWindow from "@/components/windows/4";
import FifthWindow from "@/components/windows/5";
import SixthWindow from "@/components/windows/6";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col items-center pb-6 gap-64">
      <Navbar />
      <div className="h-[30vh]" />
      <SixthWindow />
      <FirstWindow />
      <SecondWindow />
      <ThirdWindow />
      <FourthWindow />
      <FifthWindow />
    </main>
  );
}
