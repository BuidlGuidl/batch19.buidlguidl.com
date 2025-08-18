"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BuidlGuidlLogo } from "../assets/BuidlGuidlLogo";
import { GitHubIcon } from "../assets/socialsIcons/GitHubIcon";
import { TwitterIcon } from "../assets/socialsIcons/TwitterIcoon";
import { Address } from "../scaffold-eth";

const traduction = {
  fr: {
    title: "Cyril Maranber",
    description:
      "Bonjour, je m'appelle Cyril Maranber, je suis développeur a plein temps depuis un peu moins d'un an. Je me suis reconvertie apres avoir été à la tete d'une entreprise d'electricité et domotique pendant 12 ans. Je suis passionné par la technologie Blockchain et le développement web et les cryptos. J'aimerais plus collaborer à des projets open source en lien avec la blockchain et le public goods.",
  },
  en: {
    title: "Cyril Maranber",
    description:
      "Hi, I am Cyril Maranber, I am a full-time developer for a little less than a year. I transitioned into development after being the head of an electrical and home automation company for 12 years. I am passionate about blockchain technology, web development, and crypto. I would like to collaborate more on open source projects related to blockchain and public goods.",
  },
};

const socials = [
  {
    name: "GitHub",
    icon: <GitHubIcon className="w-6 h-6" />,
    link: "https://github.com/AntFrasier",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon className="w-6 h-6" mode="new" />,
    link: "https://x.com/MaranberC",
  },
  {
    name: "BuidlGuidl profile",
    icon: <BuidlGuidlLogo className="w-6 h-6" />,
    link: "https://speedrunethereum.com/builders/0xB810b728E44df56eAf4Da93DDd08168B3660753f",
  },
];

function Cmaranber() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  return (
    <div className="card bg-base-100 w-full h-full md:h-auto md:w-96 shadow-sm">
      <figure className="w-full h-full bg-gradient-to-br from-white  to-green-200 dark:from-blue-400 dark:to-blue-100 relative">
        <Image src="/cmaranber/bg-batches-train.png" alt="bg-onboarding" width={500} height={500} />
        <div className="absolute top-2 right-2 flex flex-row items-center gap-2 text-xs">
          <button
            className={`bg-base-100 px-2 py-2 rounded-full hover:bg-base-300 cursor-pointer ${lang === "fr" ? "bg-base-300" : ""} transition-colors duration-300`}
            onClick={() => setLang("fr")}
          >
            FR
          </button>
          <button
            className={`bg-base-100 px-2 py-2 rounded-full hover:bg-base-300 cursor-pointer ${lang === "en" ? "bg-base-300" : ""} transition-colors duration-300`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex flex-row items-center justify-between">
          <h2 className="card-title">{traduction[lang].title}</h2>
          <Address address="0xB810b728E44df56eAf4Da93DDd08168B3660753f" onlyEnsOrAddress />
        </div>
        <p>{traduction[lang].description}</p>
        <ul className="flex gap-2 flex-wrap justify-start items-center flex-row">
          {socials.map(social => (
            <li key={social.link} title={social.link}>
              <Link href={social.link} target="_blank" className="hover:text-primary transition-colors duration-300">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default Cmaranber;
