import { TokenChart } from "@/components/charts/tokenCharts";

export default function Charts() {
  return (
    <div className="w-full h-full py-20  text-white">
      <div className="container flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-crimson">$RXT</h1>
        <TokenChart />
      </div>
    </div>
  );
}
