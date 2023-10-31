import { TokenChart } from "@/components/charts/tokenCharts";
import { GET } from "@/app/api/token";
export default async function Charts() {
  var res = await GET();
  return (
    <div className="w-full h-full py-20  text-white" id="token">
      <div className="container flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-crimson">$RXT</h1>
        {res.error == null && res.data != null && (
          <TokenChart tokenData={[{ data: res.data }]} />
        )}
      </div>
    </div>
  );
}
