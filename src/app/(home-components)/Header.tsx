"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomeHeader() {
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["20vh", "80vh"],
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
      className="w-full h-screen md:h-[120vh] lg:h-[200vh] xl:h-[240vh] 2xl:h-[190vh]  bg-[url('/bg/grid.svg')] overflow-hidden  bg-cover bg-center bg-no-repeat flex  justify-center bg-fixed "
    >
      <div className="container z-10 px-4 flex flex-col  md:pt-64">
        <article className=" flex pt-44  flex-col text-center gap-6 justify-center items-center  font-semibold  ">
          <h1 className="text-2xl md:text-3xl xl:text-6xl font-crimson">
            Bitcoin Land: RXT&apos;s Vision for Malaysia
          </h1>
          <h2 className="text-lg md:text-2xl xl:text-4xl text-tertiary">
            Transforming the Penang, Malaysia Waterfront into Asia&apos;s
            Premier Tech Hub
          </h2>
        </article>
        <div
          style={{ scale: Math.max(1, currentDivProgress) }}
          className="relative flex w-full h-[45rem] justify-start  text-center items-start "
        >
          <video
            src="https://rimaunangis.s3.ap-southeast-1.amazonaws.com/Background+Video.mp4"
            autoPlay
            loop
            muted
            className="absolute h-full w-full md:mt-20 lg:mt-44"
          ></video>
          <div className="absolute z-20 mt-20 md:mt-56 ml-5 w-10 lg:ml-20 md:w-24">
            <Image
              src="/company/token.png"
              width={100}
              height={50}
              alt="company logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
