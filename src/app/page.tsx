import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-screen md:h-[32rem] xl:h-[50rem] bg-[url('/bg/grid.svg')] bg-cover bg-center bg-no-repeat flex justify-center bg-fixed ">
        <div className="container px-4 py-2 grid grid-rows-2 grid-flow-row">
          <article className="py-9 flex flex-col text-center gap-6 justify-center items-center  font-semibold h-full ">
            <h1 className="text-xl md:text-3xl xl:text-6xl">
              Bitcoin Land: RXT&apos;s Vision for Malaysia
            </h1>
            <h2 className="md:text-2xl xl:text-4xl">
              Transforming the Penang, Malaysia Waterfront into Asia&apos;s
              Premier Tech Hub
            </h2>
          </article>
          <div className="bg-[#262217] flex w-full h-[150%] justify-center  text-center items-center">
            <h1 className="text-4xl">GIF</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
