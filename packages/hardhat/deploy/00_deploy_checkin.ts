import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("CheckIn", {
    from: deployer,
    args: [
      "0x5FbDB2315678afecb367f032d93F642f64180aa3", // Replace with the official deployed BatchRegistry address
    ],
    log: true,
  });
};

export default deployCheckIn;
deployCheckIn.tags = ["CheckIn"];
