import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "19";

/**
 * Deploys BatchRegistry and CheckIn contracts using the deployer account
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  // const deployer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const frontendAccount = "0x7E19070D16188F3c6243C6f405764C1d0727EDAE";
  const batchRegistryAddress = "0xbf049d6383C8EB433C2DC79512A1E7a8925692AB";
  const { deploy } = hre.deployments;

  // // Deploy BatchRegistry first
  // await deploy("BatchRegistry", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [deployer, BATCH_NUMBER],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // // Get the deployed BatchRegistry contract to get its address
  // const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  // const batchRegistryAddress = await batchRegistry.getAddress();
  // console.log("\nBatchRegistry deployed to:", batchRegistryAddress);
  // console.log("Remember to update the allow list!\n");

  // Deploy CheckIn contract with BatchRegistry address
  await deploy("CheckIn", {
    from: deployer,
    // Contract constructor arguments: BatchRegistry address and owner
    args: [batchRegistryAddress, frontendAccount],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed CheckIn contract
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", frontendAccount);
  const checkInAddress = await checkIn.getAddress();
  console.log("CheckIn contract deployed to:", checkInAddress);

  console.log("\nDeployment Summary:");
  console.log("- BatchRegistry (already deployed):", batchRegistryAddress);
  console.log("- CheckIn:", checkInAddress);
  console.log("- CheckIn Owner:", frontendAccount);
  console.log("- Deployer:", deployer);
  console.log("- Batch Number:", BATCH_NUMBER);
  console.log("\nNext steps:");
  console.log("1. Make sure your address is in the allowlist on BatchRegistry");
  console.log("2. Test the callCheckIn function from your CheckIn contract");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["CheckIn"];
