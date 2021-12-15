var GrimeNFT = artifacts.require("./GrimeNFT.sol");

module.exports = function(deployer) {
  deployer.deploy(GrimeNFT);
};
