"use client";

import Image from "next/image";
import { ExternalLink, Github, Twitter } from "lucide-react";
import type { NextPage } from "next";

const JennyTPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-950">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center max-w-4xl">
        {/* Header Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 w-full">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <Image
              src="/avatar/jennyt.eth.jpg"
              alt="Jenny T. Profile"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-purple-400 shadow-lg"
              priority
            />
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-3">
            Jenny T.
          </h1>

          <p className="text-xl text-purple-600 dark:text-purple-400 mb-2 font-semibold">jennyt.eth</p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-mono break-all bg-gray-50 dark:bg-slate-700/50 px-4 py-2 rounded-lg">
            0x1bD7E9e81a927c7644DcC81D50edC0E656f0eEd6
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Community builder and manager in the Web3 ecosystem with experience in marketing, content creation, and
              coordination of decentralized projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I serve as an ambassador for Bitcoin Argentina, Conflux, and Stellar.
            </p>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/30">
                  UX Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200/50 dark:border-purple-700/30">
                  Figma
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200/50 dark:border-emerald-700/30">
                  Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-200/50 dark:border-orange-700/30">
                  Communication
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-700/30 shadow-inner">
            <p className="text-purple-700 dark:text-purple-300 italic font-medium text-lg">
              Idea generator, making things happen
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="bg-white/70 backdrop-blur-sm dark:bg-slate-800/80 rounded-3xl p-10 shadow-2xl shadow-purple-500/10 w-full border border-white/20 dark:border-slate-700/50">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Connect with me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="https://twitter.com/jennyt_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/20 border border-blue-200/50 dark:border-blue-700/30"
            >
              <div className="p-3 bg-blue-500 dark:bg-blue-400 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-lg">Twitter</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">@jennyt_eth</div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://github.com/jennyt3"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-700 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-gray-500/20 border border-gray-200/50 dark:border-gray-600/30"
            >
              <div className="p-3 bg-gray-700 dark:bg-gray-300 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6 text-white dark:text-gray-800" />
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-lg">GitHub</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">jennyt3</div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://bento.me/jennyt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-500/20 border border-purple-200/50 dark:border-purple-700/30"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-sm font-bold">B</span>
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-lg">Bento.me</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Personal links</div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://app.ens.domains/jennyt.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 hover:from-indigo-100 hover:to-blue-100 dark:hover:from-indigo-900/30 dark:hover:to-blue-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-indigo-500/20 border border-indigo-200/50 dark:border-indigo-700/30"
            >
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">ENS</span>
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-lg">ENS Profile</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">jennyt.eth</div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JennyTPage;
