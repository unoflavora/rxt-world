"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  const products = [
    {
      title: "Streaming TV",
      desc: "Rimaunangis TV is the first content streaming platform in Malaysia which was developed with a combination of blockchain technology. RXT tokens can be used to access special content that is broadcast on the Rimaunangis TV platform and also this token can provide discounts in in the form of vouchers for all uses on the Rimaunangis TV services.",
      image: "/products/streaming.png",
      url: "https://www.rimaunangis.tv",
      tag: "streaming",
    },
    {
      title: "Metaverse World",
      desc: "In a significant development within the blockchain sphere, RXT Token has achieved another breakthrough, following its inaugural RXT Connect event in Kuala Lumpur, Malaysia. This time, the spotlight was on the largest blockchain gathering in Asia, Korea Blockchain Week 2023, where RXT Capital LTD participated in the side event titled Game Ascend 2023. During this event, RXT Capital LTD introduced an innovative “Play to Earn” concept, marking a remarkable stride in the world of blockchain-based gaming.",
      image: "/products/metaverse.png",
      url: "https://metaverse.rxt.world",
      tag: "metaverse",
    },
    {
      title: "Farming via NFT",
      desc: "Founded in Malaysia in mid-2023, Farming via NFT is on a mission to promote food sustainability in Asia by harnessing the power of tokenization and smart-farming technologies. Through their innovative approach, they aim to revolutionize the agricultural industry, making it more efficient, transparent, and environmentally conscious.",
      image: "/products/farming-online.png",
      url: "https://www.farming.online",
      tag: "nft",
    },
    {
      title: "Property Development",
      desc: "Rimaunangis Sdn Bhd is a large e-commerce company in Malaysia that offers a wide variety of meat products and others. this company is one of the very high-tech e-commerce and also applies the use of technologies such as IoT and blockchain to maximize the quality of each product that is presented. This marketplace can also use RXT tokens to be used to buy discount vouchers as transaction discounts.",
      image: "/company/token.png",
      url: "https://www.bitcoinland.com",
      tag: "property",
    },
    {
      title: "E-commerce Dairy Products",
      desc: "Rimaunangis Sdn Bhd is a large e-commerce company in Malaysia that offers a wide variety of meat products and others. this company is one of the very high-tech e-commerce and also applies the use of technologies such as IoT and blockchain to maximize the quality of each product that is presented. This marketplace can also use RXT tokens to be used to buy discount vouchers as transaction discounts.",
      image: "/products/e-commerce.jpg",
      url: "https://www.rimaunangis.com",
      tag: "dairy",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center bg-[url('/bg/grid-2d-light.svg')] min-h-screen py-20">
      <div className="container flex flex-col gap-2">
        <div className="text-3xl uppercase">products</div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.17, 0.22, 0.0, 1.57],
            duration: 2.5,
          }}
          viewport={{ once: true }}
          style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          className={`flex flex-col gap-10 md:grid md:gap-20 lg:gap-44 place-content-start justify-items-start`}
        >
          {products.map((product, i) => {
            const index = i + 1;
            return (
              <div
                key={product.title}
                id={product.tag}
                className={`${
                  index % 2 === 0 ? "md:pt-72" : index !== 1 ? "md:-mt-36" : ""
                } flex flex-col gap-4 md:gap-10 h-fit `}
              >
                <Image
                  loading="eager"
                  src={product.image}
                  height={300}
                  width={300}
                  className="w-full h-full object-cover object-center"
                  alt={product.desc}
                />

                <h1 className="font-crimson text-2xl">{product.title}</h1>
                <p className="text-[#E2E2E2] text-sm md:text-base">
                  {product.desc}
                </p>

                <Link target="_blank" href={product.url}>
                  <Button variant={"outline"}>See Product</Button>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
