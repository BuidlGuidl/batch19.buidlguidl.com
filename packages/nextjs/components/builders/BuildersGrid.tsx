"use client";

import { BuilderCard } from "./BuilderCard";
import { useBuildersEvent } from "~~/hooks/useBuildersEvent";

export function BuildersGrid() {
  const { events: uniqueEvents, isLoading, error: errorReadingEvents } = useBuildersEvent();

  return errorReadingEvents !== null ? (
    <p className="text-center">An error occurred processing the builders</p>
  ) : isLoading ? (
    <>
      <p className="text-center">Loading checked-in events...</p>
      <span className="loading loading-dots loading-xl self-center"></span>
    </>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 w-full max-w-7xl mx-auto">
      {uniqueEvents.map(event => {
        const builderAddress = event.args.builder;
        if (!builderAddress) return null;

        return <BuilderCard key={builderAddress} builderAddress={builderAddress as string} />;
      })}
    </div>
  );
}
