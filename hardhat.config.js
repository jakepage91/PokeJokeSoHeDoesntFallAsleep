require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dKq6V6na9Wwmv1bVpXWKLmWfv-iOX5LP',
      accounts: ['3761d2fda4b34e16a35b2595638f61941ce93072c77e1bf8299e169a78e8c2a5'],
    },
  },
};