"use client";

import Image from "next/image";
import { NextPage } from "next";
import { useEnsName } from "wagmi";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const VigneshBuilderPage: NextPage = () => {
  const builderAddress = "0x4E2067064161de6Fd63875fA8f880a2305Fc15bE";

  // ENS Name
  const { data: ensName, isLoading: loadingEns } = useEnsName({
    address: builderAddress,
    chainId: 1,
  });

  // Batch number
  const { data: batchNumber, isLoading: loadingBatch } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "BATCH_NUMBER",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-gradient-to-b from-pink-500 to-orange-400 p-6 flex flex-col items-center text-center md:text-left justify-center text-white w-full md:w-1/3">
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
          <h2 className="text-xl font-semibold mt-4">{loadingEns ? "Loading..." : (ensName ?? "Vignesh")}</h2>
          <Address address={builderAddress} />
          <div className="badge badge-primary mt-3">Batch #{loadingBatch ? "…" : (batchNumber?.toString() ?? "—")}</div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6">
          {/* About */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">About Me</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              I’m a Web3 builder passionate about decentralization and the future of open finance. My focus is on
              developing dApps and experimenting with DeFi protocols that push the Ethereum ecosystem forward. From
              staking platforms and token vending machines to on-chain dice games and decentralized exchanges, I’m
              actively building through SpeedRunEthereum challenges. My mission is to keep learning, shipping
              open-source projects, and contributing to a trustless, permissionless, and user-owned internet.
            </p>
          </section>

          {/* Skills */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
              <CodeBracketIcon className="h-5 w-5 mr-2 text-secondary" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="badge badge-outline">Solidity</span>
              <span className="badge badge-outline">React</span>
              <span className="badge badge-outline">TypeScript</span>
              <span className="badge badge-outline">Financial Analyst</span>
              <span className="badge badge-outline">Data & Business Analyst</span>
              <span className="badge badge-outline">DeFi</span>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-gray-500 text-sm">Recent</p>
                <p className="text-gray-800 dark:text-gray-300">Over-Collateralized Lending</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Most Viewed</p>
                <p className="text-gray-800 dark:text-gray-300">Decentralized Exchange (DEX)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VigneshBuilderPage;
