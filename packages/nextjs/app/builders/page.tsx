"use client";

import type { NextPage } from "next";
import { BuildersList } from "~~/components/builders/BuildersList";

const BuildersPage: NextPage = () => {
  return (
    <div className="flex justify-center align-middle flex-col ">
      <h1 className="text-center my-5 text-xl">Builders</h1>
      <BuildersList />
    </div>
  );
};

export default BuildersPage;
