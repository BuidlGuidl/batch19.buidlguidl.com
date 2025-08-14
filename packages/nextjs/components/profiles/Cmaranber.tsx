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
    link: "https://github.com/cmaranber",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon className="w-6 h-6" mode="new" />,
    link: "https://x.com/cmaranber",
  },
  {
    name: "BuidlGuidl profile",
    icon: <BuidlGuidlLogo className="w-6 h-6" />,
    link: "https://speedrunethereum.com/builders/0xB810b728E44df56eAf4Da93DDd08168B3660753f",
  },
];

function Cmaranber() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="w-full h-full bg-g">
        <Image src="/cmaranber/bg-batches-train.png" alt="bg-onboarding" width={500} height={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{traduction[lang].title}</h2>
        <Address address="0xB810b728E44df56eAf4Da93DDd08168B3660753f" onlyEnsOrAddress />
        <p>{traduction[lang].description}</p>
        <ul className="flex gap-2 flex-wrap justify-start items-center flex-row">
          {socials.map(social => (
            <li key={social.link} title={social.link}>
              <Link href={social.link}>{social.icon}</Link>
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
            {lang === "fr" ? "English" : "Français"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cmaranber;
