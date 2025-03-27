import Navbar from "@/components/navbar";
import Window from "@/components/window";
import FirstWindow from "@/components/windows/1";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col items-center pb-6 gap-64">
      <Navbar />
      <div className="h-[30vh]" />
      <FirstWindow />
      <Window></Window>
      <Window></Window>
      <Window></Window>
    </main>
  );
}
