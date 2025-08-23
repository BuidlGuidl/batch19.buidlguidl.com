"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Github, Twitter } from "lucide-react";
import type { NextPage } from "next";
import TetrisGame from "../../../components/TetrisGame";

const JennyTPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/avatar.png"
                alt="Jenny Avatar"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Jenny T.</h1>
          <p className="text-purple-600 font-medium mb-4">jennyt.eth</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6">
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">✨ Psychologist Tech</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">📈 Growth Marketing Digital</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">🌐 Web3 | Crypto | Blockchain</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Bio & Links */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">About Me</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Community builder and manager in the Web3 ecosystem with experience in marketing, content creation, and
                coordination of decentralized projects. I serve as an ambassador for Bitcoin Argentina, Conflux, and
                Stellar.
              </p>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-700 italic text-sm text-center">
                  &quot;Idea generator, making things happen&quot;
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Connect</h2>
              <div className="space-y-3">
                
                 <a href="https://twitter.com/jennyt_eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">Twitter</span>
                </a>
                
                 <a href="https://github.com/jennyt3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700 font-medium">GitHub</span>
                </a>
                
                 <a href="https://bento.me/jennyt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700 font-medium">Bento.me</span>
                </a>
                
                 <a href="https://app.ens.domains/jennyt.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors"
                >
                  <span className="w-5 h-5 text-indigo-500 font-bold text-sm">ENS</span>
                  <span className="text-gray-700 font-medium">ENS Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Tetris Game */}
          <TetrisGame />
        </div>
      </div>
    </main>
  );
};

export default JennyTPage;
