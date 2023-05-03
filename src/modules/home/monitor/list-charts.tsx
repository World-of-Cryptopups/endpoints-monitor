import ChartsItem from "./charts-items";
import { useMonitorContainer } from "./context";

const ListChartsContainer = () => {
  const { selected, data } = useMonitorContainer();

  return (
    <ul className="mt-8">
      {selected ? (
        data.report[selected].map((item, index) => (
          <ChartsItem key={index} item={item} />
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default ListChartsContainer;
