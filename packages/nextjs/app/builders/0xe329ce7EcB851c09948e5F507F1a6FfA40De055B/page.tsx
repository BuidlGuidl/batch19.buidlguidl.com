import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const socialLinks = [
  {
    name: "X/Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/velkan_gst",
    color: "bg-black hover:bg-gray-800 text-white",
  },
  {
    name: "Telegram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    href: "https://t.me/gumbarz",
    color: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    href: "https://github.com/velikanghost",
    color: "bg-gray-900 hover:bg-gray-800 text-white",
  },
  {
    name: "Mail",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.819L12 13.09l9.545-9.269h.819c.904 0 1.636.732 1.636 1.636z" />
      </svg>
    ),
    href: "mailto:velikanghost@yahoo.com",
    color: "bg-purple-700 hover:bg-purple-800 text-white",
  },
];

const Velkan: NextPage = () => {
  return (
    <div className="flex flex-col w-full lg:h-[calc(100vh-9rem)]">
      <div className="container mx-auto px-6 flex-1 flex flex-col lg:flex-row-reverse lg:items-center items-start justify-center gap-10 lg:gap-6 xl:gap-12">
        <div className="relative flex-1 mt-8">
          <Image
            src="/avatar/velkan.avif"
            alt="Velkan"
            width={520}
            height={520}
            className="rounded-2xl w-50 h-50 lg:w-130 lg:h-130 shadow-xl border-2 border-purple-700"
          />
        </div>

        <div className="flex-1 xl:pl-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Hi
              </h1>
              <span className="text-4xl animate-bounce">👋</span>
            </div>
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200">I&apos;m Velkan</p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                A Full-stack blockchain developer passionate about building
                <span className="font-semibold text-blue-600 dark:text-blue-400"> decentralized applications</span> and
                contributing to the{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Web3 ecosystem</span>.
              </p>
              <p className="text-base text-slate-500 dark:text-slate-500">
                Specialized in smart contract development and frontend integration.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-200">Contact me</h2>

            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2`}
                >
                  {link.icon}
                  <span className="hidden lg:block">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Velkan;
