"use client";

import Image from "next/image";
import { ExternalLink, Github, Twitter } from "lucide-react";

const JennyTPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <Image
                  src="/jenny-profile.jpg"
                  alt="Jenny T Profile"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-purple-200 dark:border-purple-800"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">Jenny T.</h1>

                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  jennyt.eth • 0x1bD7E9e81a927c7644DcC81D50edC0E656f0eEd6
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Community builder and manager in the Web3 ecosystem with experience in marketing, content creation,
                  and coordination of decentralized projects. I serve as an ambassador for Bitcoin Argentina, Conflux,
                  and Stellar.
                </p>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-purple-700 italic text-sm text-center">'Idea generator, making things happen'</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h2>

            <div className="space-y-3">
              <a
                href="https://twitter.com/jennyt_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <Twitter className="w-5 h-5 text-blue-500" />

                <span className="text-gray-700 font-medium">Twitter</span>
              </a>

              <a
                href="https://github.com/jennyt3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-700" />

                <span className="text-gray-700 font-medium">GitHub</span>
              </a>

              <a
                href="https://bento.me/jennyt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-purple-500" />

                <span className="text-gray-700 font-medium">Bento.me</span>
              </a>

              <a
                href="https://app.ens.domains/jennyt.eth"
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
      </div>
    </main>
  );
};

export default JennyTPage;
