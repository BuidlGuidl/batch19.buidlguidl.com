"use client";

import type { NextPage } from "next";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const builderAddress = "0x2a2cC957b37159e844c1AD8E7C662568e855C79D";

const PacePhilpotProfile: NextPage = () => {
  const { data: ensName } = useEnsName({
    address: builderAddress,
    chainId: 1,
  });

  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ? normalize(ensName) : undefined,
    chainId: 1,
  });

  const { data: isCheckedIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [builderAddress],
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

  return (
    <div className="flex flex-col items-center grow pt-10">
      <div className="px-5 w-full max-w-4xl">
        <div className="bg-base-100 rounded-3xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <BlockieAvatar address={builderAddress} ensImage={ensAvatar} size={80} />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Builder Profile</h1>
              <div className="flex items-center mt-2">
                <span className="font-bold mr-2">Address:</span>
                <Address address={builderAddress} />
              </div>
              <div className="flex gap-3 mt-3">
                <div className="badge badge-primary">Batch #{batchNumber?.toString()}</div>
                <div className={`badge ${isCheckedIn ? "badge-success" : "badge-warning"}`}>
                  {isCheckedIn ? "Checked In" : "Not Checked In"}
                </div>
                <div className={`badge ${hasGraduated ? "badge-success" : "badge-info"}`}>
                  {hasGraduated ? "Graduated" : "In Progress"}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2 flex items-center">
                  <CodeBracketIcon className="h-5 w-5 fill-secondary mr-2" />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline">Solidity</div>
                  <div className="badge badge-outline">Rust</div>
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">TypeScript</div>
                  <div className="badge badge-outline">Foundry</div>
                  <div className="badge badge-outline">Next.js</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-3xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">English Introduction</h3>
              <p className="mb-4">
                I am a senior student majoring in Computer Science from China. I have been studying web3 for two years.
                I found Patrick&apos;s course through learning videos on YouTube. Their developers created a tutorial
                using Foundry and set up a website. I went directly to that website to watch the videos and learned all
                the courses related to Solidity project development and security, gaining a solid understanding of
                Solidity.
              </p>
              <p>
                In the past six months, I have studied the Uniswap source code and learned about different DeFi
                protocols. I have also written several projects myself, hoping to improve my development skills during
                this journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">中文介绍</h3>
              <p className="mb-4">
                我是来自中国计算机专业的一名大四学生。学习web3已经有两年了，我是在YouTube上面找学习的视频，找到了Patrick的课程，他们的开发人员用foundry做了一个教程，并且建立了一个网站，我就直接去那个网站上面看视频学习，把上面有关solidity的项目开发和安全的课程都看完了，对solidity有了一定的认知。
              </p>
              <p>
                最近半年我看了uniswap的源码，学习了不同的defi协议，自己也写了几个项目，希望能在这次旅程中提升自己的开发能力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacePhilpotProfile;
