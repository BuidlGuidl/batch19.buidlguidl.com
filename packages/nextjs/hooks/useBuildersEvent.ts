import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

// first block where a builder checkedIn
const FIRST_BLOCK: bigint = 368046197n;

export function useBuildersEvent() {
  const {
    data: events,
    isLoading,
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
  const seen = new Set<string>();
  const uniqueEvents =
    events?.filter(item => {
      if (item.args.builder === undefined) return false;

      if (seen.has(item.args.builder)) {
        return false;
      }
      seen.add(item.args.builder);
      return true;
    }) || [];

  return {
    events: uniqueEvents,
    isLoading,
    error: errorReadingEvents,
  };
}
