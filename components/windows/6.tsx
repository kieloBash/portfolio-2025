import React from "react";
import Window from "../window";
import { ArrowRight } from "lucide-react";
import Browser from "../browser";
import Link from "next/link";
import { ProjectType } from "@/lib/constants";

const SixthWindow = () => {
  const projectName: ProjectType = "bnk";

  return (
    <Window>
      <div className="w-full min-h-screen px-8 py-8 relative">
        <Link href={`/projects/${projectName}`}>
          <button
            className="absolute top-8 right-8 p-1 hover:bg-neutral-600 cursor-pointer rounded-full transition-colors"
            type="button"
          >
            <ArrowRight className="size-8" />
          </button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">BNK</h1>
        <p className="text-base max-w-xl mb-8">
          Capstone 2025 -{" "}
          <span className="text-neutral-400">
            Website application for simulating banking withdrawals, deposits,
            and transfers
          </span>
        </p>
        <Browser url="http://bnk.vercel.com"></Browser>
      </div>
    </Window>
  );
};

export default SixthWindow;
