const MarketPlace = artifacts.require("KittyMarketplace");
const Token = artifacts.require("KittyContract");

module.exports = function(deployer) {
    deployer.deploy(MarketPlace, Token.address);
};