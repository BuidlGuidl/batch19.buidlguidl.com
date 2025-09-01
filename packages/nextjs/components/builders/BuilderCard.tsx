import Image from "next/image";
import Link from "next/link";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { BUILDER_DATA } from "~~/utils/builderData";

export const BuilderCard = ({ builderAddress }: { builderAddress: string }) => {
  const { data: ensName } = useEnsName({
    address: builderAddress as `0x${string}`,
    chainId: 1,
  });

  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ? normalize(ensName) : undefined,
    chainId: 1,
  });

  const builderData = BUILDER_DATA[builderAddress as keyof typeof BUILDER_DATA];

  const displayName = ensName || builderData.name;

  return (
    <div className="card w-86 h-122 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden relative">
      <Image
        src={ensAvatar || "/avatar/default.jpg"}
        alt={displayName}
        fill
        className="object-cover"
        sizes="100%"
        priority
      />

      <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl p-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-black">{displayName}</h3>
          <p className="text-sm text-purple-600 font-medium">{builderData.title}</p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{builderData.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {builderData.social.map(
                ({
                  platform,
                  url,
                  icon: IconComponent,
                }: {
                  platform: string;
                  url: string;
                  icon: React.ComponentType;
                }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <IconComponent />
                  </a>
                ),
              )}
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
