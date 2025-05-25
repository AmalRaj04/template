// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Replace with your contract name
  const contractName = "MyContract";

  // Deploy the contract
  const ContractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy();

  // Wait for the contract to be deployed
  await contract.waitForDeployment();

  console.log(`${contractName} deployed to: ${contract.target}`);
}

// Run the script and handle errors
main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});