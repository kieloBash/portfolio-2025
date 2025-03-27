import Navbar from "@/components/navbar";
import React from "react";

const MePage = () => {
  return (
    <main className="w-full min-h-screen relative flex flex-col items-center pb-6">
      <Navbar />
      <div className="h-[30vh]" />
      <div className="w-full max-w-5xl rounded-xl border p-1.5 bg-neutral-900">
        <div className="w-full min-h-[90vh] gradient rounded-xl p-4"></div>
      </div>
    </main>
  );
};

export default MePage;
