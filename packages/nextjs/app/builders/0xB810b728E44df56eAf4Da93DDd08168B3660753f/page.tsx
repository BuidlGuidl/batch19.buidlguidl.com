import { NextPage } from "next";
import Cmaranber from "~~/components/profiles/Cmaranber";

const CmProfilePage: NextPage = () => {
  return (
    <div className="w-full h-[calc(100vh-140.5px)] flex flex-col items-center justify-center">
      <Cmaranber />
    </div>
  );
};
export default CmProfilePage;
