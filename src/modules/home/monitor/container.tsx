import { useMonitorContainer } from "./context";
import ListChartsContainer from "./list-charts";
import MonitorListType from "./list-type";

const MonitorContainer = () => {
  const { selected } = useMonitorContainer();

  return (
    <div className="mt-4">
      <MonitorListType />

      {!selected ? (
        <div className="h-36 py-12">
          <p>
            <small className="text-gray-500">
              Select a type from the list to view the endpoints...
            </small>
          </p>
        </div>
      ) : (
        <></>
      )}

      <ListChartsContainer />
    </div>
  );
};

export default MonitorContainer;
