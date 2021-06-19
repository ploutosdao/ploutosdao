import { ethers } from "hardhat";

async function main(): Promise<void> {
  const electionFactory = await ethers.getContractFactory("Election");
  const election = await electionFactory.deploy();

  console.log(`election address: ${election.address}`);
  console.log(`election transaction: ${election.deployTransaction.hash}`);

  await election.deployed();

  const candidates = await election.getAllCandidates();
  candidates.forEach((_, name, count) => console.log(`${name}: ${count}`));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });