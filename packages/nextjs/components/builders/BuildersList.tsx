"use client";

import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

interface BuildersListProps {
  buildersPages: string[];
}

export function BuildersList({ buildersPages }: BuildersListProps) {
  const {
    data: events,
    isLoading: isLoading,
    error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 368046197n,
    watch: true,
    blockData: false,
    transactionData: false,
    receiptData: false,
    blocksBatchSize: 500_000,
  });

  const uniqueEvents = events?.filter(event => event?.args?.first);

  return errorReadingEvents !== null ? (
    <p>An error ocurred processing the builders</p>
  ) : isLoading ? (
    <p>Loading checked-in events...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-2 justify-items-center px-2 w-max self-center">
      {uniqueEvents.map((event, index) => {
        return (
          <div key={index} className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <Address address={event.args.builder} />
              <div className="justify-end card-actions">
                {buildersPages.includes(event.args.builder ?? "") ? (
                  <>
                    <Link className="btn btn-secondary btn-sm" href={`/builders/${event.args.builder}`}>
                      Page
                    </Link>
                    <button className="btn btn-secondary btn-sm">Contract</button>
                  </>
                ) : (
                  <button className="btn btn-secondary btn-sm">Contract</button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
