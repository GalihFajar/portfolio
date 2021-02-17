import React from "react";
import ContactMe from "../src/components/ContactMe";
import { FeaturedProjects } from "../src/components/FeaturedProjects";
import { Introduction } from "../src/components/Introduction";
import Head from "next/head";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Galih Fajar Fitra Ady</title>
      </Head>
      <div className="overflow-x-hidden">
        <Introduction />
        <FeaturedProjects />
        <ContactMe />
      </div>
    </>
  );
};
export default Index;
