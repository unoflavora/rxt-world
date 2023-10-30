import Image from "next/image";

export default function Page() {
  return (
    <div className="container py-20 flex flex-col gap-20">
      <div className="flex w-full justify-center items-center flex-col gap-2">
        <h1>OUR TEAM</h1>
        <h2 className="font-bold text-white text-5xl">Meet the RXT TEAM</h2>
        <p className="text-tertiary">Lorem Ipsum</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
        <Person />
      </div>
    </div>
  );
}

function Person() {
  return (
    <div className="flex flex-col gap-3 border border-gray-50/10 ">
      <Image
        className="w-full h-full"
        src={"/placeholder.png"}
        width={500}
        height={500}
        alt="Image"
      />
      <div className="flex flex-col gap-2 px-2 bg-[#0F0E0B]">
        <h1 className="font-bold text-white text-lg ">Name</h1>
        <h2 className="text-tertiary">Title</h2>
        <p className="text-tertiary">Description</p>
      </div>
      <div className="flex gap-1 pt-4 pb-2 px-2">
        {["email", "facebook", "instagram", "linkedin", "twitter"].map(
          (social, key) => (
            <Image
              key={social}
              src={`/icons/outline/${social}.svg`}
              height={25}
              width={25}
              alt={social}
            />
          )
        )}
      </div>
    </div>
  );
}
