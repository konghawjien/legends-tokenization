require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { PRIVATE_KEY, BASE_RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    base: {
      url: BASE_RPC_URL || "https://base-mainnet.rpc.url", // Replace with actual Base RPC URL
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};
