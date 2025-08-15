"use client";

import { useState } from "react";
import Image from "next/image";
import Flags from "./components/Flags";
import githubIcon from "./components/assets/github-svgrepo-com.svg";
import linkedinIcon from "./components/assets/linkedin-svgrepo-com.svg";
import envelopeIcon from "./components/assets/mail-alt-3-svgrepo-com.svg";
import { Address } from "~~/components/scaffold-eth";

export default function Page() {
  const heightWidth = 40;
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    if (hover) return;
    setHover(true);

    // Reinicia la animación después de 2.2s
    setTimeout(() => {
      setHover(false);
    }, 2200);
  };

  return (
    <>
      <div className="flex flex-col items-center my-10 p-10">
        <div onMouseEnter={() => handleMouseEnter()}>
          <div className="relative card w-96 bg-base-100 card-lg shadow-sm">
            <Flags hoverTrigger={hover} />
            <div className="dark:bg-slate-800 card-body rounded-md">
              <div className="flex flex-row">
                <h2 className="card-title">Ethan Rouimi</h2>
              </div>
              <p>
                I&apos;m a 22 year old self-taught software developer, I&apos;m from the Canary Islands and I&apos;m a
                Franco-Spanish citizen.
              </p>
              <p className="absolute right-[-40px] bottom-[-25px] rotate-[-35deg] text-xs text-center">
                Hover over me <br /> to see what happens :)
              </p>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-slate-800 bg-white card-lg shadow-sm mt-10 rounded-md">
          <div className="card-body justify-center card-actions flex flex-col">
            <div>
              <h2 className="font-bold mb-4">Socials</h2>
              <div className="flex justify-end gap-3 text-3xl" aria-label="Email">
                <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[2px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                  <Image height={heightWidth} width={heightWidth} src={envelopeIcon} alt="envelope icon" />
                </div>

                <a className="size-fit" aria-label="Github Link" href="https://github.com/Ethanol48">
                  <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[2px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                    <Image height={heightWidth} width={heightWidth} src={githubIcon} alt="github icon" />
                  </div>
                </a>

                <a className="size-fit" aria-label="Linkedin Link" href="https://linkedin.com/in/ethan-rouimi">
                  <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[2px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                    <Image
                      height={heightWidth}
                      width={heightWidth}
                      src={linkedinIcon}
                      alt="linkedin icon"
                      className="linkedin"
                    />
                  </div>
                </a>

                <Address
                  disableAddressLink={true}
                  onlyEnsOrAddress={true}
                  address="0xb76080b3025f0fAAF8A2223C037C351d6AF6A1AA"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex flex-row gap-2 justify-center items-center h-10">
            <div className="flex flex-row gap-1">
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">H</kbd>
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">J</kbd>
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">K</kbd>
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">L</kbd>
            </div>

            <div className="text-xl mx-2">{`>>>`}</div>

            <div className="flex flex-row gap-1">
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">A</kbd>
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">W</kbd>
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">S</kbd>
              <kbd className="kbd kbd-md dark:bg-slate-800 rounded-sm">D</kbd>
            </div>
          </div>
          <p className="text-xs text-center">I love neovim</p>
        </div>
      </div>

      <style jsx>{`
        .linkedin {
          color: rgba(24, 152, 222, 0.7);
        }
      `}</style>
    </>
  );
}
