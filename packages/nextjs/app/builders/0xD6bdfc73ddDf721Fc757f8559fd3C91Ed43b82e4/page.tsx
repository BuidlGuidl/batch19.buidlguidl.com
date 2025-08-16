import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Sahib: NextPage = () => {
  return (
    <div className="flex w-full h-[75vh] flex-col items-center justify-center gap-8">
      <div className="max-w-2xl w-full bg-[var(--color-base-100)]   mt-8 shadow-lg shadow-amber-900 rounded-xl p-8 backdrop-blur-sm transition-all hover:shadow-xl">
        <h1 className="text-center text-4xl font-bold  mb-6">Hi, I&apos;m Sahibpreet Singh</h1>
        <p className="text-lg  leading-relaxed">
          I am enthusiastic about blockchain technology and currently learning new things everyday. I have prior
          experience in different technologies ranging from nextjs, springboot, c# and some android dev experience.
          <br />I am excited to join the BUIDL community and contribute to the ecosystem.
        </p>
      </div>

      <div className="max-w-2xl w-full bg-[var(--color-base-100)] shadow-lg shadow-amber-900 rounded-xl p-8  backdrop-blur-sm transition-all hover:shadow-xl">
        <p className="text-2xl font-bold mb-6 text-center">Connect With Me</p>
        <div className="flex gap-6 items-center justify-center">
          <a href="https://x.com/sahibpreet229" target="_blank" className="transition-transform hover:scale-110">
            <Image width={50} height={50} src="/ximg.webp" alt="Twitter" className="rounded-lg" />
          </a>
          <a href="https://github.com/Sahib-Aujla" target="_blank" className="transition-transform hover:scale-110">
            <Image width={50} height={50} src="/gitImg.png" alt="GitHub" className="rounded-lg" />
          </a>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Address address="0xD6bdfc73ddDf721Fc757f8559fd3C91Ed43b82e4" />
        </div>
      </div>
    </div>
  );
};
export default Sahib;
