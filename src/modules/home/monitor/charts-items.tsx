import { LogDataProps } from "@/lib/db";
import { ReportClass } from "@/typings/endpoint";
import MonitorChart from "./chart";

interface ChartsItemProps {
  item: (string | ReportClass)[];
  data: LogDataProps[];
}

const ChartsItem = (props: ChartsItemProps) => {
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

      <MonitorChart data={props.data} url={props.item[1].toString()} />
    </li>
  );
};

export default ChartsItem;
