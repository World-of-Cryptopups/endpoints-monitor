import HomePage from "@/modules/home/page";
import { EndpointsProps } from "@/typings/endpoint";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const r = await fetch(
    "https://raw.githubusercontent.com/World-of-Cryptopups/endpoints-monitor-worker/main/endpoints.json"
  );
  const data: EndpointsProps = await r.json();

  return {
    props: { data },
  };
};

export default HomePage;
