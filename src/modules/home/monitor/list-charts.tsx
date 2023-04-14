import { LogDataProps } from "@/lib/db";
import fetcher from "@/lib/fetcher";
import { APIProps } from "@/typings/api";
import useSWR from "swr";
import ChartsItem from "./charts-items";
import { useMonitorContainer } from "./context";

const ListChartsContainer = () => {
  const { selected, data } = useMonitorContainer();

  const {
    data: logsData,
    isLoading,
    isValidating,
  } = useSWR<APIProps<LogDataProps[]>>(
    selected ? `/api/fetcher/${selected}` : null,
    fetcher
  );

  if (!logsData) {
    return <></>;
  }

  return (
    <ul className="mt-8">
      {selected && logsData.data ? (
        data.report[selected].map((item, index) => (
          <ChartsItem key={index} data={logsData.data} item={item} />
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default ListChartsContainer;
