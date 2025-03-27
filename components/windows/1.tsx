import React from "react";
import Window from "../window";
import { ArrowRight } from "lucide-react";
import Browser from "../browser";

const FirstWindow = () => {
  return (
    <Window>
      <div className="w-full min-h-screen px-8 py-8 relative">
        <button
          className="absolute top-8 right-8 p-1 hover:bg-neutral-600 cursor-pointer rounded-full transition-colors"
          type="button"
        >
          <ArrowRight className="size-8" />
        </button>
        <h1 className="text-3xl font-bold mb-2">TrainerHub</h1>
        <p className="text-base max-w-xl mb-8">
          Capstone Commission 2025 -{" "}
          <span className="text-neutral-400">
            Mobile application for trainer workout bookings and website
            application for admin users.
          </span>
        </p>
        <Browser url="http://trainerhub.vercel.com"></Browser>
      </div>
    </Window>
  );
};

export default FirstWindow;
