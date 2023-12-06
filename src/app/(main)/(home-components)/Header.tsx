"use client";

import { client } from "@/lib/sanity/lib/client";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { buildFileUrl } from "@sanity/asset-utils";

export default function HomeHeader(props: { fileId: string }) {
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: [0, "100vh"],
  });

  const [currentDivProgress, setCurrentDivProgress] = useState(0);

  useEffect(() => {
    scrollYProgress.on("change", (val) => {
      setCurrentDivProgress(Math.min(1 + val, 1.4));
    });
    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  var url = buildFileUrl({
    assetId: props.fileId,
    extension: "mp4",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  });
  console.log(url);

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
          preload="true"
          style={{ scale: Math.max(1, currentDivProgress) }}
          src={url}
          autoPlay
          loop
          muted
          playsInline
          className="overflow-y-visible"
        ></video>
      </div>
    </div>
  );
}
