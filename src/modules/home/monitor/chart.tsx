import { LogDataProps } from "@/lib/db";
import { useRef } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface MonitorChartProps {
  data: LogDataProps[];
  url: string;
}

const MonitorChart = (props: MonitorChartProps) => {
  const filteredData = useRef(
    props.data
      .filter((i) => i.url === props.url)
      .sort((a, b) => a.date_time - b.date_time)
  );

  return (
    <div className="h-64 w-full z-20">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={filteredData.current}>
          <CartesianGrid strokeDasharray="3, 3" />

          <XAxis
            dataKey="date_time"
            fontSize={12}
            tickFormatter={(v) => new Date(v * 1000).toLocaleString()}
          />
          <YAxis fontSize={12} tickFormatter={(v) => v.toString()} />

          <Tooltip
            content={({ active, payload, label }) =>
              active && payload && payload.length ? (
                <div className="bg-white p-2 rounded-lg border">
                  <p className="text-sm text-gray-700">
                    {new Date(label * 1000).toString()}
                  </p>

                  <div>
                    {payload.map((p) => (
                      <div key={p.dataKey}>
                        <p className="text-gray-900 font-bold">
                          {p.value ? (p.value as number) : "0"} {p.dataKey} (
                          {p.payload.response.Status})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )
            }
          />

          <Area type="monotone" dataKey="ms" stroke="#a855f7" fill="#a855f7" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonitorChart;
