"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomeHeader() {
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: [0, "100vh"],
  });

  const [currentDivProgress, setCurrentDivProgress] = useState(0);

  useEffect(() => {
    scrollYProgress.on("change", (val) => {
      console.log(val);
      setCurrentDivProgress(Math.min(1 + val, 1.4));
    });
    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  return (
    <div
      ref={headerRef}
      className="w-full min-h-fit py-20 bg-[url('/bg/grid.svg')] overflow-hidden  bg-cover bg-center bg-no-repeat flex  justify-center items-center  bg-fixed "
    >
      <div className="relative container z-10 px-4 flex flex-col gap-10  ">
        <article className="lg:py-36 flex flex-col text-center gap-6 justify-center items-center  font-semibold  ">
          <h1 className="text-2xl md:text-3xl xl:text-6xl font-crimson">
            Bitcoinland: RXT&apos;s Vision for Malaysia
          </h1>
          <h2 className="text-lg md:text-2xl xl:text-4xl text-tertiary">
            Transforming the Penang, Malaysia Waterfront into Asia&apos;s
            Premier Tech Hub
          </h2>
        </article>
        <video
          style={{ scale: Math.max(1, currentDivProgress) }}
          src="https://rimaunangis.s3.ap-southeast-1.amazonaws.com/Background+Video.mp4"
          autoPlay
          loop
          muted
          className="overflow-y-visible"
        ></video>
      </div>
    </div>
  );
}
