import { base64Encode } from "@/lib/b64";
import { LogDataProps } from "@/lib/db";
import fetcher from "@/lib/fetcher";
import { APIProps } from "@/typings/api";
import { ReportClass } from "@/typings/endpoint";
import { useEffect, useState } from "react";
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

  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(props.item[1].toString());

    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }, [copied]);

  return (
    <li className="p-2 rounded-lg border my-2">
      <div className="mb-2 flex items-start justify-between">
        <div>
          <p>
            <strong className="text-gray-800 tracking-wide">
              {(props.item[0] as ReportClass).html_name}
            </strong>{" "}
            <span className="text-gray-600">
              ({props.item[3].toString()}, {props.item[2].toString()})
            </span>
          </p>
          <div className="inline-flex items-center">
            <a
              href={props.item[1].toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline break-words"
            >
              {props.item[1].toString()}
            </a>

            <button title="Copy Link" onClick={copyLink} className="ml-2">
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <p
          className="text-sm font-medium tracking-wide text-gray-500"
          title="Rank"
        >
          # {(props.item[0] as ReportClass).rank}
        </p>
      </div>

      {data?.data ? (
        <MonitorChart data={data.data} url={props.item[1].toString()} />
      ) : (
        <div className="h-64 animate-pulse bg-gray-200 rounded-xl"></div>
      )}
    </li>
  );
};

export default ChartsItem;
