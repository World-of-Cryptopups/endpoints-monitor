import { EndpointsProps } from "@/typings/endpoint";
import { ReactChildrenProps } from "@tbdsux/js-utils-react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface MonitorContextProps {
  data: EndpointsProps;
  typeKeys: string[];
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
}
const MonitorContext = createContext<MonitorContextProps>({
  data: {
    meta: {
      details: {
        value: "",
      },
      network: {
        label: "",
        value: "",
      },
      title: {
        value: "",
      },
      update: {
        label: "",
        value: "",
      },
    },
    report: {},
  },
  typeKeys: [],
  selected: null,
  setSelected: () => {},
});

interface MonitorContainerProviderProps extends ReactChildrenProps {
  data: EndpointsProps;
}

const MonitorContainerProvider = (props: MonitorContainerProviderProps) => {
  // exclude p2p
  const typeKeys = Object.keys(props.data.report).filter((i) => i !== "p2p");

  // hook for select list
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <MonitorContext.Provider
      value={{ data: props.data, typeKeys, selected, setSelected }}
    >
      {props.children}
    </MonitorContext.Provider>
  );
};

export const useMonitorContainer = () => {
  const context = useContext(MonitorContext);
  if (context === undefined)
    throw new Error("<MonitorContainerProvider></MonitorContainerProvider>");

  return context;
};

export default MonitorContainerProvider;
