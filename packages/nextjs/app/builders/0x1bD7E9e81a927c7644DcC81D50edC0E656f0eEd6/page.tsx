"use client";

import Image from "next/image";
import type { NextPage } from "next";

const JennyTPage: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-accent rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200">
          <Image
            src="/avatar/jennyt.eth.jpg"
            alt="Jenny T. Profile"
            fill
            sizes="(max-width: 768px) 100vw, 128px"
            className="object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Jenny T.</h1>
          <p className="text-lg text-purple-600 dark:text-purple-400 mb-2">jennyt.eth</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            0x1bD7E9e81a927c7644DcC81D50edC0E656f0eEd6
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Community builder and manager in the Web3 ecosystem with experience in marketing, content creation, and
          coordination of decentralized projects.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          I serve as an ambassador for Bitcoin Argentina, Conflux, and Stellar.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            UX Design
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Figma
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Design
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Communication
          </span>
        </div>
      </div>

      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
        <p className="text-purple-700 dark:text-purple-300 italic text-center">
          &ldquo;Idea generator, making things happen&rdquo;
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Connect</h3>
        <div className="space-y-2">
          <a
            href="https://twitter.com/jennyt_eth"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <div className="font-medium text-gray-900 dark:text-white">Twitter</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">@jennyt_eth</div>
          </a>

          <a
            href="https://github.com/jennyt3"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="font-medium text-gray-900 dark:text-white">GitHub</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">jennyt3</div>
          </a>

          <a
            href="https://bento.me/jennyt"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          >
            <div className="font-medium text-gray-900 dark:text-white">Bento.me</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Personal links</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JennyTPage;
