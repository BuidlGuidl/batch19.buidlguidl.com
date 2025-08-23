"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { NextPage } from "next";
import { useEnsName } from "wagmi";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Fahmin: NextPage = () => {
  const params = useParams();
  const address = params.address as string;
  const [isHovered, setIsHovered] = useState(false);

  // Get ENS name using wagmi hook
  const { data: ensName } = useEnsName({
    address: address as `0x${string}`,
    chainId: 1,
    query: {
      enabled: Boolean(address),
      gcTime: 30_000,
    },
  });

  // You can customize these details
  const builderInfo = {
    name: "Fahmin",
    title: "Smart Contract Developer & Web3 Enthusiast",
    bio: "Passionate about building decentralized applications and exploring the future of blockchain technology. Currently focused on DeFi protocols and NFT innovations.",
    skills: ["Solidity", "React", "TypeScript", "Hardhat", "Ethereum", "DeFi"],
    socials: {
      github: "https://github.com/fahmmin",
      twitter: "https://twitter.com/fahmin_md",
      linkedin: "https://linkedin.com/in/fahminmohammed",
      portfolio: "https://github.com/fahmmin",
    },
    achievements: [
      "Built multiple DeFi protocols",
      "Contributed to open-source projects",
      "Completed advanced Solidity courses",
      "Active in Web3 communities",
    ],
  };

  const avatarUrl = ensName ? `https://euc.li/${ensName}` : null;

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-base-content leading-tight">
                  {builderInfo.name} is a <span className="text-primary">smart contract</span> developer and{" "}
                  <span className="text-primary">Web3</span> enthusiast
                </h1>
                <p className="text-xl text-base-content/70 font-mono">
                  He crafts decentralized applications where blockchain meets innovation
                </p>
              </div>

              {/* Address Display */}
              <div className="inline-flex items-center space-x-3 bg-base-200/50 rounded-2xl p-4 border border-base-300">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={`${ensName} avatar`}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                )}
                <Address address={address} size="base" format="long" />
              </div>
            </div>

            {/* Right Side - Large Profile Picture */}
            <div className="relative flex justify-center">
              <div
                className="relative w-96 h-96"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={`${ensName} profile`}
                    width={384}
                    height={384}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <CodeBracketIcon className="h-24 w-24 text-primary/60" />
                  </div>
                )}
                {isHovered && (
                  <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
                    <SparklesIcon className="h-16 w-16 text-primary" />
                  </div>
                )}
              </div>

              {/* Geometric Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/30 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-secondary/30 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-base-200/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-primary/30 mb-4">&quot;</div>
          <blockquote className="text-2xl lg:text-3xl text-base-content/80 font-medium mb-4">
            With great code comes great responsibility
          </blockquote>
          <div className="text-6xl text-primary/30">&quot;</div>
          <p className="text-base-content/60 mt-4">- Web3 Developer</p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* About Section */}
          <section id="about" className="scroll-mt-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-base-content mb-8 text-center flex items-center justify-center">
                <span className="text-primary mr-3">#</span>about-me
              </h2>
              <div className="bg-base-200/50 rounded-3xl p-8 border border-base-300">
                <p className="text-lg text-base-content/80 leading-relaxed text-center">{builderInfo.bio}</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-base-content mb-12 text-center flex items-center justify-center">
              <span className="text-primary mr-3">#</span>skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-base-content flex items-center">
                  <CodeBracketIcon className="h-5 w-5 text-primary mr-2" />
                  Languages
                </h3>
                <div className="space-y-2">
                  {builderInfo.skills.slice(0, 2).map((skill, index) => (
                    <div key={index} className="text-base-content/70">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-base-content flex items-center">
                  <RocketLaunchIcon className="h-5 w-5 text-secondary mr-2" />
                  Frameworks
                </h3>
                <div className="space-y-2">
                  {builderInfo.skills.slice(2, 4).map((skill, index) => (
                    <div key={index} className="text-base-content/70">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-base-content flex items-center">
                  <SparklesIcon className="h-5 w-5 text-accent mr-2" />
                  Specialties
                </h3>
                <div className="space-y-2">
                  {builderInfo.skills.slice(4).map((skill, index) => (
                    <div key={index} className="text-base-content/70">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-base-content mb-12 text-center flex items-center justify-center">
              <span className="text-primary mr-3">#</span>achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {builderInfo.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-base-200/50 rounded-2xl border border-base-300"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base-content/80">{achievement}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-base-content mb-12 text-center flex items-center justify-center">
              <span className="text-primary mr-3">#</span>contacts
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-base-content/80 text-center mb-8">
                I&apos;m interested in Web3 opportunities and collaborations. Feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(builderInfo.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 bg-base-200/50 rounded-2xl border border-base-300 hover:border-primary/50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        {platform === "github" && <CommandLineIcon className="h-5 w-5 text-primary" />}
                        {platform === "twitter" && (
                          <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        )}
                        {platform === "linkedin" && (
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                        {platform === "portfolio" && <GlobeAltIcon className="h-5 w-5 text-primary" />}
                      </div>
                      <span className="font-medium text-base-content capitalize">{platform}</span>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-base-content/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Batch 19 Badge */}
          <div className="text-center pt-12">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-xl shadow-lg">
              <SparklesIcon className="h-6 w-6 mr-3" />
              Batch 19 Builder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fahmin;
