import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { ReactChildrenProps } from "@tbdsux/js-utils-react";
import { NextSeo } from "next-seo";

interface DefaultLayoutProps extends ReactChildrenProps {
  title: string;
  description: string;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <>
      <NextSeo title={props.title} description={props.description} />

      <Header />

      <hr />

      <div className="my-6 w-11/12 mx-auto">{props.children}</div>

      <hr />

      <Footer />
    </>
  );
};

export default DefaultLayout;
