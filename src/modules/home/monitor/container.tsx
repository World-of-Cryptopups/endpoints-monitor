import ListChartsContainer from "./list-charts";
import MonitorListType from "./list-type";

const MonitorContainer = () => {
  return (
    <div className="mt-4">
      <MonitorListType />

      <ListChartsContainer />
    </div>
  );
};

export default MonitorContainer;
