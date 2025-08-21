"use client";

import Link from "next/link";
import { Graduated } from "./Graduated";
import { GlobeIcon } from "./globeIcon";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

interface BuildersListProps {
  buildersPages: string[];
}

// first block where a builder checkedIn
const FIRST_BLOCK: bigint = 368046197n;

function removeDuplicates(arr: any[]): any[] {
  const seen = new Set<string>();
  return arr.filter(item => {
    if (seen.has(item.builder)) {
      return false; // ya estaba → lo descarta
    }
    seen.add(item.builder);
    return true; // lo mantiene
  });
}

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

  // ensure unique events, https://github.com/BuidlGuidl/batch19.buidlguidl.com/pull/23#discussion_r2289451799
  const uniqueEvents = removeDuplicates(events);

  return errorReadingEvents !== null ? (
    <p className="text-center">An error ocurred processing the builders</p>
  ) : isLoading ? (
    <>
      <p className="text-center">Loading checked-in events...</p>
      <span className="loading loading-dots loading-xl self-center"></span>
    </>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-2 justify-items-center px-2 w-max self-center">
      {uniqueEvents.map((event, index) => {
        return (
          <div key={index} className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body flex flex-row justify-between md:flex-col">
              <Address onlyEnsOrAddress={true} address={event.args.builder} />
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center md:justify-end invisible w-0 md:w-max md:visible">
                  {event.args.builder !== undefined && <Graduated address={event.args.builder} />}
                </div>
                {buildersPages.includes(event.args.builder ?? "") ? (
                  <Link className="btn btn-secondary btn-sm self-end" href={`/builders/${event.args.builder}`}>
                    <p>Builder Page</p>
                    <GlobeIcon />
                  </Link>
                ) : (
                  <div className="btn btn-secondary btn-sm btn-disabled self-end">
                    <p>Builder Page</p>
                    <GlobeIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
