import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 text-white font-semibold sm:py-1 lg:text-[1.5rem] lg:leading-9 font-sans font-semibold ">
      <Image
        src={"/company/token.png"}
        width={30}
        height={25}
        alt="company logo"
      />
      <h1>RXT CAPITAL LIMITED</h1>
    </div>
  );
}
