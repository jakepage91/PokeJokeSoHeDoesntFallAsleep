require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dKq6V6na9Wwmv1bVpXWKLmWfv-iOX5LP',
      accounts: ['private-key'],
    },
  },
};