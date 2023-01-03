const RoyalPets = artifacts.require("RoyalPets");

module.exports = async function (deployer) {
  await deployer.deploy(RoyalPets);
};
