"use client";

import { useAccount } from "wagmi";
import { AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const ConnectedWalletBatchInfos = () => {
  const { address } = useAccount();
  const isMember = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });
  const userContractAddress = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const isCheckedIn =
    typeof userContractAddress.data === "string" &&
    userContractAddress.data !== "0x0000000000000000000000000000000000000000";

  return (
    <div className="flex gap-2">
      {isMember.data && <AcademicCapIcon className="size-6" title="Batch Member" />}
      {isCheckedIn && <CheckBadgeIcon className="size-6" title="Checked In" />}
    </div>
  );
};
