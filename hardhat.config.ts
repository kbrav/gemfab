import '@nomiclabs/hardhat-ethers'

import './task/deploy-gemfab'

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  paths: {
    sources: "./sol"
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20000
          }
        },
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200
          }
        },
      },
    ],
  }
}
