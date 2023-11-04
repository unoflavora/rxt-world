"use client";
import { motion, stagger } from "framer-motion";

import Image from "next/image";

export default function MeetRimaunangis() {
  const contents = [
    {
      key: "VISION",
      title: "Vision of Bitcoin Land as a Landmark Project",
      desc: "RXT sees Asia as the next epicenter of the tech boom, with Malaysia poised to play a central role. Our sustained investments and partnerships in Malaysia underline our belief in its strategic position in Asia's tech uprising. 36 cent on the dollar purchasing power.",
      image: "/company/token.png",
    },
    {
      key: "ORIGINS AND HISTORY",
      title: "The Legacy & Powerhouse Behind RXT",
      desc: "Introduction to the Bitcoin Land project: Bitcoin Land is more than a development project; it's a vision to create a hub that encapsulates the essence of technological evolution. Rooted in the principles of innovation, sustainability, and forward- thinking, Bitcoin Land is designed to be a magnet for tech enthusiasts, startups, and established giants in the industry.",
      image: "/company/rimaunangis.png",
    },
  ];

  const missions = [
    {
      title: "Introduction to the Bitcoin Land project",
      desc: "Bitcoin Land is more than a development project; it's a vision to create a hub that encapsulates the essence of technological evolution. Rooted in the principles of innovation, sustainability, and forward- thinking, Bitcoin Land is designed to be a magnet for tech enthusiasts, startups, and established giants in the industry.",
      image: "/company/mission (3).png",
    },
    {
      title: "Strategic Importance of Malaysia's Waterfront",
      desc: "The selection of Malaysia's waterfront for this landmark initiative is not coincidental. The waterfront, with its panoramic vistas and prime location, serves as a metaphorical bridge, connecting old traditions with new tech frontiers. It is both an ode to Malaysia's rich history and a nod to its promising future in the heart of Asia.",
      image: "/company/mission (2).png",
    },
    {
      title: "Vision for Redefining Asia's Tech Landscape",
      desc: "As Asia emerges as the next global tech powerhouse, Bitcoin Land seeks to position Malaysia at the vanguard of this transformation. The project embodies our belief that Malaysia has the potential to set benchmarks for the rest of Asia, driving technological advancements that resonate worldwide. In essence, Bitcoin Land isn't just a place; it's a movement, aiming to redefine the contours of Asia's tech narrative.",
      image: "/company/mission (1).png",
    },
  ];

  return (
    <div className="relative w-full flex justify-center py-10  text-[#F0F2F5]">
      <Image
        className="absolute right-0 top-5"
        src={"/graphics/box.svg"}
        width={50}
        height={50}
        alt="decoration"
      />

      <div className="container flex flex-col gap-10 md:gap-36">
        <h1 className="text-center text-3xl font-crimson">MEET RIMAUNANGIS</h1>
        {contents.map((content, i) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.17, 0.22, 0.0, 1.57], duration: 2.5 }}
            viewport={{ once: true }}
            key={content.key}
            className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 text-start"
          >
            <div
              style={{ backgroundImage: `url('${content.image}')` }}
              className={`${
                i % 2 == 0 ? "max-sm:order-first order-last" : "order-first"
              } h-full w-full max-sm:min-h-[17rem] min-h-[23rem] bg-center bg-contain bg-no-repeat`}
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-base uppercase bg-white text-black px-3 w-fit font-bold">
                {content.key}
              </h2>
              <h3 className="text-4xl text-primary font-crimson">
                {content.title}
              </h3>
              <p className="text-[#F0F2F5]">{content.desc}</p>
            </div>
          </motion.div>
        ))}

        <div className="flex max-sm:flex-col px-4 xl:px-24 flex-wrap justify-center items-start gap-10 bg-[#1E1C17] shadow py-6 md:py-20  ">
          {missions.map((mission, i) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.17, 0.22, 0.0, 1.57],
                duration: 2.5,
                delay: 0.2 * i,
              }}
              viewport={{ once: true }}
              className="relative flex flex-col  gap-[1.25rem] xl:min-w-[20rem] md:text-center text-start lg:text-start md:w-[calc(50%-1.25rem)] lg:w-[calc(33%-1.25rem-.3rem)] w-auto justify-start md:justify-center lg:justify-start items-start md:items-center lg:items-start "
              key={mission.title}
            >
              <Image
                className="w-20 aspect-square max-sm:self-center rounded-full"
                src={mission.image}
                width={100}
                height={25}
                alt={mission.title + " image"}
              />
              <h1 className="text-2xl font-semibold font-crimson">
                {mission.title}
              </h1>
              <p className="text-base font-light">{mission.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
