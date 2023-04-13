import DefaultLayout from "@/layout/default";
import { EndpointsProps } from "@/typings/endpoint";

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
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
