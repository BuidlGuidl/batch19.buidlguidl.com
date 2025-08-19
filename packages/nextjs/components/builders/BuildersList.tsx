"use client";

// import { getBuilderPages } from '~~/utils/getBuilderFolders';
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

export function BuildersList() {
  const {
    data: events,
    isLoading: isLoading,
    // error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 368046197n,
    watch: true,
    blockData: false,
    transactionData: false,
    receiptData: false,
  });

  return isLoading ? (
    <p>Loading checked-in events...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-2 justify-items-center px-2 w-max self-center">
      {events.map((event, index) => {
        return (
          <div key={index} className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <Address address={event.args.builder} />
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Contract</button>
                <button className="btn btn-primary">Page</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
