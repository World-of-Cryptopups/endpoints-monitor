import DefaultLayout from "@/layout/default";
import { EndpointsProps } from "@/typings/endpoint";
import MonitorContainer from "./monitor/container";
import MonitorContainerProvider from "./monitor/context";

interface HomePageProps {
  data: EndpointsProps;
}

const HomePage = (props: HomePageProps) => {
  return (
    <DefaultLayout
      title="Wax Endpoints Monitor by World of Cryptopups"
      description=""
    >
      <div className="w-11/12 mx-auto">
        <div>
          <p className="text-gray-700">
            Endpoints monitor for{" "}
            <strong>Block Producer bp.json Validator Report</strong> (
            <a
              href="https://validate.eosnation.io/wax/reports/endpoints.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://validate.eosnation.io/wax/reports/endpoints.html
            </a>
            )
          </p>
          <div className="text-gray-500 mt-3">
            <p>
              The following tests / monitors are actual requests with a http
              client and waits for the response before getting the final time.
            </p>
          </div>
        </div>

        <hr className="my-2" />

        <MonitorContainerProvider data={props.data}>
          <MonitorContainer />
        </MonitorContainerProvider>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
