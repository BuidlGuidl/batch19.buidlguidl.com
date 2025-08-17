"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { useEnsName } from "wagmi";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const VigneshBuilderPage: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const builderAddress = "0x4E2067064161de6Fd63875fA8f880a2305Fc15bE";

  // ENS Name
  const { data: ensName } = useEnsName({
    address: builderAddress,
    chainId: 1,
    query: { enabled: isMounted },
  });

  // Contract reads
  const { data: isCheckedIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter", // update based on your ABI
    // args: [builderAddress], // Remove this line if checkedInCounter does not require arguments
  });

  const { data: hasGraduated } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "graduatedTokenId",
    args: [builderAddress],
  });

  const { data: batchNumber } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "BATCH_NUMBER",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const shortAddress = builderAddress.slice(0, 6) + "..." + builderAddress.slice(-4);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-gradient-to-b from-pink-500 to-orange-400 p-6 flex flex-col items-center justify-center text-white w-full md:w-1/3">
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
          <h2 className="text-xl font-semibold mt-4">{ensName ?? "Vignesh"}</h2>
          <p className="text-sm">{shortAddress}</p>
          <a
            href="https://github.com/VigneshsparrowEsh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center w-8 h-8 border border-white rounded-full hover:bg-white hover:text-pink-500 transition"
          >
            ↗
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6">
          {/* Address */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Address</h3>
            <div className="mt-2">
              <Address address={builderAddress} />
            </div>
          </section>

          {/* Status */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Status</h3>
            <div className="flex gap-3 mt-3">
              <span className="badge badge-primary">Batch #{batchNumber?.toString() ?? "—"}</span>
              <span className={`badge ${isCheckedIn ? "badge-success" : "badge-warning"}`}>
                {isCheckedIn ? "Checked In" : "Not Checked In"}
              </span>
              <span className={`badge ${hasGraduated ? "badge-success" : "badge-info"}`}>
                {hasGraduated ? "Graduated" : "In Progress"}
              </span>
            </div>
          </section>

          {/* About */}
          <section className="mt-6">
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
            <div className="grid grid-cols-2 gap-4 mt-2">
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

          {/* Social Links */}
          <section className="mt-6 flex space-x-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vignesh-v-051a001b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition dark:text-blue-400 dark:hover:text-blue-500"
              aria-label="LinkedIn"
            >
              {/* LinkedIn SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                  2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                  5-5v-14c0-2.77-2.23-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.27c-.97 
                  0-1.75-.79-1.75-1.76s.78-1.76 
                  1.75-1.76 1.75.79 
                  1.75 1.76-.78 1.76-1.75 
                  1.76zm13.5 11.27h-3v-5.5c0-1.31-.03-3-1.83-3s-2.12 
                  1.43-2.12 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.75 
                  1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 
                  3.58 4.57v5.61z"
                />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/sparrowEsh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition dark:text-white dark:hover:text-gray-300"
              aria-label="X"
            >
              {/* X SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.244 2.25h3.308l-7.227 
                  8.26 8.502 11.24H16.35l-5.214-6.817-5.97 
                  6.817H1.86l7.73-8.828L1.357 
                  2.25h6.085l4.713 6.231 6.089-6.231zM16.34 
                  19.92h1.833L7.732 4.09H5.768l10.572 
                  15.83z"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/VigneshsparrowEsh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="GitHub"
            >
              {/* GitHub SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 
                  12 0 5.303 3.438 9.8 8.205 
                  11.387.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 
                  1.205.084 1.84 1.236 1.84 
                  1.236 1.07 1.835 2.809 1.304 
                  3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.93 
                  0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 
                  0 0 1.008-.322 3.301 1.23a11.5 
                  11.5 0 0 1 3.003-.404c1.018.005 2.044.138 
                  3.003.404 2.292-1.552 3.3-1.23 
                  3.3-1.23.653 1.653.241 2.873.118 
                  3.176.77.84 1.235 1.91 1.235 
                  3.22 0 4.61-2.803 5.624-5.475 
                  5.921.43.37.823 1.102.823 
                  2.222 0 1.604-.015 2.896-.015 
                  3.286 0 .319.218.694.825.576C20.565 
                  22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VigneshBuilderPage;
