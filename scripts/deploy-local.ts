import { ethers } from "hardhat";

async function main() {
  const tokens = ["Dai", "USDT", "USDC"];
  const [owner] = await ethers.getSigners();

  const tokenAddresses = await Promise.all(tokens.map(async (token): Promise<string> => {
    const Token = await ethers.getContractFactory(token);
    const tokenVal = await Token.deploy();
    await tokenVal.deployed();

    await tokenVal.faucet(owner.address, 1000);
    console.log(`deployed ${token} @ ${tokenVal.address}`);
    return tokenVal.address; 
  }));

  tokenAddresses.forEach((address, i) => {
    console.log(`${tokens[i]} contract address: ${address}`)
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
