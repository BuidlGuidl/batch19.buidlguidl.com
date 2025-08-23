import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface GraduatedProps {
  address: string;
}

export function Graduated({ address }: GraduatedProps) {
  const { data: graduated, isLoading: isBalanceOfLoading } = useScaffoldReadContract({
    contractName: "BatchGraduationNFT",
    functionName: "balanceOf",
    args: [address],
  });

  if (isBalanceOfLoading) {
    return (
      <div className="flex flex-row">
        <p>Loading</p>
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  } else {
    if (graduated === undefined) {
      return <p className="text-red-500">Error</p>;
    } else {
      return graduated > 0 ? (
        <span className="badge badge-success">Graduated</span>
      ) : (
        <span className="badge badge-neutral badge-soft">Not graduated</span>
      );
    }
  }
}
