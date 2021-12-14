//require('dotenv').config({ path: './client/.env' });

const path = require("path");
require('dotenv').config({ path: './client/.env' });
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/ce617edbed264510b46c8427012bd855");
      },
      network_id: 3,
      skipDryRun: true
    },

  },
  compilers: {
    solc: {
      version: "^0.6.1"
      // optimizer: {
      //   enabled: true,
      //   runs: 200
      // }
    }
  }
};
