"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const Window = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLSpanElement>(null);

  const isInView = useInView(containerRef);

  const containerControls = useAnimationControls();
  const containerVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const lightControls = useAnimationControls();
  const lightVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 0.4,
    },
  };

  useEffect(() => {
    if (isInView) {
      lightControls.start("show");
      containerControls.start("show");
    } else {
      lightControls.start("hide");
      containerControls.start("hide");
    }
  }, [isInView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = (
        e.target as HTMLElement
      )?.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      lightRef?.current!.animate(
        { left, top },
        { duration: 250, fill: "forwards" }
      );
    };
    const handleMouseLeave = () => {
      //   lightRef?.current!.animate(
      //     { left: "50%", bottom:"100%" },
      //     { duration: 100, fill: "forwards" }
      //   );
    };

    containerRef?.current?.addEventListener("mousemove", handleMouseMove);
    containerRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerRef?.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef?.current?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      animate={containerControls}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="w-full max-w-5xl rounded-xl border p-1.5 bg-neutral-900 relative overflow-hidden"
    >
      <motion.span
        initial="hide"
        variants={lightVariants}
        animate={lightControls}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-5/6 left-1/2 -translate-x-1/2 size-[24rem] blur-[120px] bg-white"
      />
      <motion.span
        ref={lightRef}
        className="size-14 bg-white rounded-full absolute blur-[80px] opacity-100 left-1/2 -translate-x-1/2"
      />
      <div className="w-full min-h-[90vh] gradient rounded-xl">{children}</div>
    </motion.div>
  );
};

export default Window;
