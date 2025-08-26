import Image from "next/image";
import { NextPage } from "next";
import { ArrowRightIcon, CodeBracketIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { socialIconMap } from "~~/components/builders/SocialIcons";
import { Address } from "~~/components/scaffold-eth";

const builderInfo = {
  name: "Fahmin",
  title: "Smart Contract Developer & Web3 Enthusiast",
  bio: "Passionate about building decentralized applications and exploring the future of blockchain technology. Currently focused on DeFi protocols and NFT innovations.",
  skills: ["Solidity", "React", "TypeScript", "Hardhat", "Ethereum", "DeFi"],
  socials: {
    github: "https://github.com/fahmmin",
    twitter: "https://twitter.com/fahmin_md",
    linkedin: "https://linkedin.com/in/fahminmohammed",
    portfolio: "https://www.fahmin.me",
  },
  achievements: [
    "Built multiple DeFi protocols",
    "Contributed to open-source projects",
    "Completed advanced Solidity courses",
    "Active in Web3 communities",
  ],
};

const Fahmin: NextPage = () => {
  const avatarUrl = `https://euc.li/fahmin.eth`;

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
                  Building the future of decentralized applications
                </p>
              </div>

              {/* Address Display */}
              <div className="inline-flex items-center space-x-3 bg-base-200/50 rounded-2xl p-4 border border-base-300">
                <Address address={"0x7E19070D16188F3c6243C6f405764C1d0727EDAE"} size="base" format="long" />
              </div>
            </div>

            {/* Right Side - Large Profile Picture */}
            <div className="relative flex justify-center">
              <a
                href={builderInfo.socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-96 h-96 block"
              >
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={`fahmin.eth profile`}
                    width={384}
                    height={384}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <CodeBracketIcon className="h-24 w-24 text-primary/60" />
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <SparklesIcon className="h-16 w-16 text-primary" />
                </div>
              </a>

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
{socialIconMap[platform] ?? null}
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
