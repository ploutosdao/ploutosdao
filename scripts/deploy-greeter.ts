import { Contract } from "@ethersproject/contracts";
// We require the Hardhat Runtime Environment explicitly here. This is optional but useful for running the
// script in a standalone fashion through `node <script>`. When running the script with `hardhat run <script>`,
// you'll find the Hardhat Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main(): Promise<void> {
  const factory = await ethers.getContractFactory("Greeter");
  const greeter = await factory.deploy("Hello, sir");

  await greeter.deployed();
  console.log("Greeter deployed to: ", await greeter.resolvedAddress);

  console.log(`the current greeting: ${await greeter.greeting()}`);
  await greeter.setGreeting("Hello ser")

  console.log(`the updated greeting: ${await greeter.greeting()}`);
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
