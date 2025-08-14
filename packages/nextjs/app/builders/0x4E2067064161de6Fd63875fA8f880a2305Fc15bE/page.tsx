import React from "react";
import Image from "next/image";

export default function BuilderPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <section className="flex items-center gap-6">
        {/* Avatar */}
        <Image
          src="/avatar.png" // put your avatar image inside public/avatar.png
          alt="Builder Avatar"
          width={100}
          height={100}
          className="rounded-full border border-gray-300"
        />

        {/* Bio */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">VIGNESH SPARROW</h1>
          <p className="text-gray-600">
            Hey! I’m a builder in Batch 19 working on exciting Web3 projects. Passionate about smart contracts,
            decentralized finance, and creating cool dApps.
          </p>
        </div>
      </section>

      {/* Address */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Wallet Address</h2>
        <p className="font-mono text-sm text-gray-500">0x4E2067064161de6Fd63875fA8f880a2305Fc15bE</p>
      </section>

      {/* Links */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Links</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>
            <a href="https://x.com/sparrowEsh" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/VigneshsparrowEsh" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://okyourproject.com" target="_blank" rel="noopener noreferrer">
              Personal Website
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
