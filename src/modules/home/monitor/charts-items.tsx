import { base64Encode } from "@/lib/b64";
import { LogDataProps } from "@/lib/db";
import fetcher from "@/lib/fetcher";
import { APIProps } from "@/typings/api";
import { ReportClass } from "@/typings/endpoint";
import useSWR from "swr";
import MonitorChart from "./chart";
import { useMonitorContainer } from "./context";

interface ChartsItemProps {
  item: (string | ReportClass)[];
}

const ChartsItem = (props: ChartsItemProps) => {
  const { selected } = useMonitorContainer();
  const { data } = useSWR<APIProps<LogDataProps[]>>(
    `/api/fetcher/${selected}/${base64Encode(props.item[1].toString())}`,
    fetcher
  );

  return (
    <li className="p-2 rounded-lg border my-2">
      <div className="mb-2">
        <p>
          <strong className="text-gray-700 tracking-wide">
            {(props.item[0] as ReportClass).html_name}
          </strong>{" "}
          <span className="text-gray-600">
            ({props.item[3].toString()}, {props.item[2].toString()})
          </span>
        </p>
        <p className="text-gray-700">{props.item[1].toString()}</p>
      </div>

      {data?.data ? (
        <MonitorChart data={data.data} url={props.item[1].toString()} />
      ) : (
        <p>Loading...</p>
      )}
    </li>
  );
};

export default ChartsItem;
