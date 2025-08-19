const { ethers } = require("hardhat");

async function main() {
    const batchRegistryAddress = "0xbf049d6383C8EB433C2DC79512A1E7a8925692AB";
    
    const CheckIn = await ethers.getContractFactory("CheckIn");
    const checkIn = await CheckIn.deploy(batchRegistryAddress);
    
    console.log("CheckIn deployed to:", checkIn.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
