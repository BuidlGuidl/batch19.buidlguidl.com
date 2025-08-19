"use client";

import Link from "next/link";
import { GlobeIcon } from "./globeIcon";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

interface BuildersListProps {
  buildersPages: string[];
}

const FIRST_BLOCK: bigint = 368046197n;

export function BuildersList({ buildersPages }: BuildersListProps) {
  const {
    data: events,
    isLoading: isLoading,
    error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: FIRST_BLOCK,
    watch: false,
    blockData: false,
    transactionData: false,
    receiptData: false,
    blocksBatchSize: 500_000,
  });

  // ensure unique events
  const uniqueEvents = events?.filter(event => event.args.first);

  return errorReadingEvents !== null ? (
    <p className="text-center">An error ocurred processing the builders</p>
  ) : isLoading ? (
    <>
      <p className="text-center">Loading checked-in events...</p>
      <span className="loading loading-dots loading-xl"></span>
    </>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-2 justify-items-center px-2 w-max self-center">
      {uniqueEvents.map((event, index) => {
        return (
          <div key={index} className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body flex flex-row justify-between md:flex-col">
              <div className="flex flex-row justify-between">
                <Address address={event.args.builder} />
              </div>
              <div className="justify-end card-actions">
                {buildersPages.includes(event.args.builder ?? "") ? (
                  <Link className="btn btn-secondary btn-sm" href={`/builders/${event.args.builder}`}>
                    <p>Builder Page</p>
                    <GlobeIcon color={"#000000"} />
                  </Link>
                ) : (
                  <Link className="btn btn-secondary btn-sm btn-disabled" href={`/builders/${event.args.builder}`}>
                    <p>Builder Page</p>
                    <GlobeIcon color={"#B9BAC1"} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
