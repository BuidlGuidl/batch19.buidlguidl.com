"use client";

import Link from "next/link";
import { Graduated } from "./Graduated";
import { GlobeIcon } from "./globeIcon";
import { Address } from "~~/components/scaffold-eth";
import { useBuildersEvent } from "~~/hooks/useBuildersEvent";

interface BuildersListProps {
  buildersPages: string[];
}

export function BuildersList({ buildersPages }: BuildersListProps) {
  const { events: uniqueEvents, isLoading, error: errorReadingEvents } = useBuildersEvent();

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
