import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployBatchRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("BatchRegistry", {
    from: deployer,
    args: [
      deployer, // initialOwner
      19, // batchNumber (replace with your actual batch number)
    ],
    log: true,
  });
};

export default deployBatchRegistry;
deployBatchRegistry.tags = ["BatchRegistry"];
