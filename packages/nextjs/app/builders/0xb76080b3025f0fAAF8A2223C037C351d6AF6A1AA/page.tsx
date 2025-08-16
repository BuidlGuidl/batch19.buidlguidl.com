"use client";

import { useState } from "react";
import Image from "next/image";
import photo from "./assets/0xethanol.png";
import canaryFlag from "./assets/flag-canary-islands-min.png";
import githubIcon from "./assets/github-svgrepo-com.svg";
import linkedinIcon from "./assets/linkedin-svgrepo-com.svg";
import envelopeIcon from "./assets/mail-alt-3-svgrepo-com.svg";
import telegramIcon from "./assets/telegram-logo.svg";
import { Flags } from "./components/Flags";
import type { NextPage } from "next";

const iconSize = 50;

const Ethanol: NextPage = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    if (hover) return;
    setHover(true);

    // Reset the animation after 2.2s
    setTimeout(() => {
      setHover(false);
    }, 2200);
  };

  return (
    <>
      <div className="flex flex-col items-center p-10 pt-12">
        <div onMouseEnter={() => handleMouseEnter()}>
          <div className="relative card w-96 bg-base-100 card-lg shadow-sm">
            <Flags hoverTrigger={hover} />
            <div className="dark:bg-slate-800 card-body rounded-md">
              <div className="flex flex-row justify-between pr-12">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <Image src={photo} alt="profile photo" />
                  </div>
                </div>
                <h2 className="card-title">Ethan Rouimi</h2>
              </div>
              <div className="relative mt-2">
                <div>I&apos;m a self-taught software developer from the Canary Islands</div>
                <Image
                  className="absolute bottom-[1px] left-[135px]"
                  src={canaryFlag}
                  height={20}
                  width={20}
                  alt="Canary Islands flag"
                />
              </div>
              <div>with a passion for open-source projects.</div>
              <p className="absolute right-[-40px] bottom-[-15px] rotate-[-35deg] text-xs text-center">
                Hover over me <br /> to see what happens :)
              </p>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-slate-800 bg-white card-lg shadow-sm mt-10 rounded-md">
          <div className="card-body justify-center card-actions flex flex-col">
            <div>
              <h2 className="font-bold mb-4">Some of my skills</h2>
              <div>
                <div className="badge text-black bg-gray-300  dark:bg-gray-400 m-[1px]">Solidity</div>
                <div className="badge text-black bg-blue-300  dark:bg-blue-400 m-[1px]">Golang</div>
                <div className="badge text-black bg-yellow-300 dark:bg-yellow-400 m-[1px]">Python</div>
                <div className="badge text-black bg-amber-500 dark:bg-amber-600 m-[1px]">Rust</div>

                <div className="flex flex-row">
                  <div className="badge text-black bg-orange-400 dark:bg-orange-500 m-[1px]">SvelteKit</div>
                  <div className="badge text-black bg-purple-200 dark:bg-purple-300 m-[1px]">Nextjs</div>
                  <div className="ml-3 text-gray-500">and more ...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-slate-800 bg-white card-lg shadow-sm mt-10 rounded-md">
          <div className="card-body justify-center card-actions">
            <h2 className="font-bold mb-5">Socials</h2>
            <div className="flex flex-col justify-end gap-3 w-full">
              <div className="w-full flex flex-row justify-around">
                <a className="size-fit" aria-label="Email" href="mailto:contact@ethan-rouimi.com">
                  <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[2px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                    <Image height={iconSize} width={iconSize} src={envelopeIcon} alt="envelope icon" />
                  </div>
                </a>

                <a className="size-fit" aria-label="Github Link" href="https://github.com/Ethanol48">
                  <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[2px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                    <Image height={iconSize} width={iconSize} src={githubIcon} alt="github icon" />
                  </div>
                </a>

                <a className="size-fit" aria-label="Linkedin Link" href="https://linkedin.com/in/ethan-rouimi">
                  <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[2px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                    <Image
                      height={iconSize}
                      width={iconSize}
                      src={linkedinIcon}
                      alt="linkedin icon"
                      className="linkedin"
                      style={{ color: "rgba(24, 152, 222, 0.7)" }}
                    />
                  </div>
                </a>

                <a className="size-fit" aria-label="Telegram" href="https://t.me/EthanRouimi">
                  <div className="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-[4px] transition ease-in-out dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700  hover:bg-slate-200 hover:border-slate-500  border-slate-400">
                    <Image height={iconSize - 4} width={iconSize - 4} src={telegramIcon} alt="telegram icon" />
                  </div>
                </a>
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
    </>
  );
};

export default Ethanol;
