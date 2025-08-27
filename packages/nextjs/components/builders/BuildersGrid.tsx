"use client";

import Image from "next/image";
import Link from "next/link";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { useBuildersEvent } from "~~/hooks/useBuildersEvent";
import { BUILDER_DATA } from "~~/utils/constants";

export function BuildersGrid() {
  const { events: uniqueEvents, isLoading, error: errorReadingEvents } = useBuildersEvent();

  const getBuilderData = (address: string) => {
    return BUILDER_DATA[address as keyof typeof BUILDER_DATA];
  };

  // Component to handle ENS resolution for a single builder
  const BuilderCard = ({ builderAddress }: { builderAddress: string }) => {
    const { data: ensName } = useEnsName({
      address: builderAddress as `0x${string}`,
      chainId: 1,
    });

    const { data: ensAvatar } = useEnsAvatar({
      name: ensName ? normalize(ensName) : undefined,
      chainId: 1,
    });

    const builderData = getBuilderData(builderAddress);

    const displayName = ensName || builderData.name;

    return (
      <div className="card w-86 h-122 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden relative">
        <Image
          src={ensAvatar || "https://avatars.githubusercontent.com/u/111103306?v=4"}
          alt={displayName}
          fill
          className="object-cover"
          sizes="100%"
        />

        <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl p-4">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-black">{displayName}</h3>
            <p className="text-sm text-purple-600 font-medium">{builderData.title}</p>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{builderData.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {Object.entries(builderData.social).map(([platform, url]) => (
                  <SocialIcon key={platform} type={platform} href={url} />
                ))}
              </div>
              <Link
                href={builderData.link}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View Profile →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SocialIcon = ({ type, href }: { type: string; href: string }) => {
    const icons = {
      github: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      linkedin: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      twitter: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      telegram: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    };

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700 transition-colors"
      >
        {icons[type as keyof typeof icons]}
      </a>
    );
  };

  return errorReadingEvents !== null ? (
    <p className="text-center">An error occurred processing the builders</p>
  ) : isLoading ? (
    <>
      <p className="text-center">Loading checked-in events...</p>
      <span className="loading loading-dots loading-xl self-center"></span>
    </>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 w-full max-w-7xl mx-auto">
      {uniqueEvents.map((event, index) => {
        const builderAddress = event.args.builder;
        if (!builderAddress) return null;

        return <BuilderCard key={index} builderAddress={builderAddress as string} />;
      })}
    </div>
  );
}
