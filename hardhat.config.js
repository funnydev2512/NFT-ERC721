require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "Fsb0aKZSI1rE9x9mZ6W3AxTKueRkP2RN";
const GOERLI_PRIVATE_KEY =
  "0a4973e2d8b77717c73ae0e020ec26873c05167e4076f6277aa835583dbcea76";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "UWH7GA4XQZY97QK4NZEGGW5ZSDUMURFG13",
  },
};
