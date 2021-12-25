const Token = artifacts.require("KittyContract");

module.exports = function(deployer) {
    deployer.deploy(Token);
};