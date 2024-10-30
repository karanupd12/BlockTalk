require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const NEXT_PUBLIC_POLYGON_EMOY_RPC = "https://rpc-amoy.polygon.technology/";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_EMOY_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};