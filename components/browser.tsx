import {
  ArrowLeft,
  ArrowRight,
  CircleUser,
  EllipsisVertical,
  PlusIcon,
  RefreshCcw,
  RotateCw,
} from "lucide-react";
import React, { ReactNode } from "react";

const Browser = ({ children, url }: { children?: ReactNode; url?: string }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="w-full min-h-[30rem] rounded-xl border z-10 relative bg-neutral-900 shadow-2xl">
        <div className="w-full px-4 pt-2 flex gap-2">
          <div className="flex justify-start items-center gap-1">
            <div className="size-2.5 bg-red-500 rounded-full" />
            <div className="size-2.5 bg-yellow-500 rounded-full" />
            <div className="size-2.5 bg-green-500 rounded-full" />
          </div>
          <div className="flex flex-1 justify-start items-center gap-2">
            <div className="w-[11rem] bg-neutral-700 h-7 rounded-t-lg"></div>
            <span>
              <PlusIcon className="size-4 text-neutral-400" />
            </span>
          </div>
        </div>
        <div className="w-full px-4 py-2 flex bg-neutral-700 gap-3">
          <div className="flex justify-center items-center gap-2">
            <span className="">
              <ArrowLeft className="size-4 text-neutral-500" />
            </span>
            <span className="">
              <ArrowRight className="size-4 text-neutral-500" />
            </span>
            <span className="">
              <RotateCw className="size-4 text-neutral-500" />
            </span>
          </div>
          <div className="flex-1 h-7 flex justify-start items-center text-neutral-400 bg-neutral-800 rounded-md px-2">
            <p className="text-xs">{url}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="">
              <CircleUser className="size-4 text-neutral-500" />
            </span>
            <span className="">
              <EllipsisVertical className="size-4 text-neutral-500" />
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Browser;
