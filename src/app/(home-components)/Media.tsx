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
      title: "Yahoo Finance",
      image: "/media/yahoo-finance.jpg",
    },
    {
      title: "Yahoo Finance",
      image: "/media/yahoo-finance.jpg",
    },
    {
      title: "Yahoo Finance",
      image: "/media/yahoo-finance.jpg",
    },
  ];
  return (
    <div className="w-full h-full py-20 bg-white  text-black">
      <div className="flex flex-col gap-5">
        <h2 className="container bg-black text-white text-xl w-fit px-5 py-2">
          MEDIA PARTNER
        </h2>
        <div className="flex flex-col md:flex-row gap-2 overflow-hidden ">
          {medias.map((media, i) => {
            return (
              <div
                key={media.title}
                className="bg-square flex flex-col md:min-w-[32rem] px-2 gap-0"
              >
                <div className="bg-white px-2  flex justify-center items-center h-[25rem]">
                  <Image
                    width={500}
                    height={200}
                    alt={media.image}
                    src={media.image}
                  />
                </div>
                <h3 className="text-black font-bold text-4xl">{media.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
