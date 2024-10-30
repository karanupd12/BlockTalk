const hre = require("hardhat");

async function main() {
  const ChatApp = await hre.ethers.getContractFactory("ChatApp");
  const chatApp = await ChatApp.deploy();

  await chatApp.deployed();

  console.log(` Contract Address: ${chatApp.address}`);
}

//npx hardhat run scripts/deploy.js --network polygon_amoy (no need to run local hardhat node)
//npx hardhat run scripts/deploy.js --network localhost

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


