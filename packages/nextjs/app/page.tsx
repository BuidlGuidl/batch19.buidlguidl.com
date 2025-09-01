"use client";

import type { NextPage } from "next";
import { BuildersGrid } from "~~/components/builders/BuildersGrid";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });
  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 19</span>
          </h1>
          <p className="text-center text-lg">Get to know the builders.</p>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            <span> {checkedInCounter}</span>
          </p>

          <BuildersGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
