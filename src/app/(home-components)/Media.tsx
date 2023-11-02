import Image from "next/image";

export default function Media() {
  const medias = [
    {
      title: "Bloomberg",
      image: "/media/bloomberg.png",
    },
    {
      title: "Yahoo Finance",
      image: "/media/yahoo-finance.jpg",
    },
    {
      title: "Mena FN",
      image: "/media/menafn.png",
    },
    {
      title: "Street Insider",
      image: "/media/street-insider.png",
    },
    {
      title: "Investor Obsevers",
      image: "/media/investors-oberserver.png",
    },
  ];
  return (
    <div className="w-full h-full py-20 bg-white  text-black overflow-x-hidden">
      <div className="flex flex-col gap-5">
        <h2 className="container bg-black text-white text-xl w-fit px-5 py-2">
          MEDIA PARTNER
        </h2>
        <div className="flex relative overflow-hidden">
          <div className="px-2 flex w-full min-w-fit flex-col justify-center items-center md:flex-row md:animate-marquee gap-2  ">
            {medias.map((media, i) => {
              return (
                <div
                  key={media.title}
                  className="bg-square flex flex-col md:min-w-[32rem] px-2 gap-0"
                >
                  <div className="bg-white px-2  flex justify-center items-center h-[25rem]">
                    <Image
                      width={300}
                      height={200}
                      alt={media.image}
                      src={media.image}
                    />
                  </div>
                  <h3 className="text-black text-center font-bold text-4xl">
                    {media.title}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="px-2 absolute w-full min-w-fit max-sm:hidden flex flex-col animate-marquee2 md:flex-row gap-2   ">
            {medias.map((media, i) => {
              return (
                <div
                  key={`${media.title} 2`}
                  className="bg-square flex flex-col md:min-w-[32rem] px-2 gap-0"
                >
                  <div className="bg-white px-2  flex justify-center items-center h-[25rem]">
                    <Image
                      width={300}
                      height={200}
                      alt={media.image}
                      src={media.image}
                    />
                  </div>
                  <h3 className="text-black text-center font-bold text-4xl">
                    {media.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
