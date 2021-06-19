// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
  constructor() ERC20('Dai Stablecoin', 'DAI') {}

  function faucet(address recipient, uint amount) external {
    _mint(recipient, amount);
  }
}

contract USDT is ERC20 {
  constructor() ERC20('USDT Stablecoin', 'USDT') {}

  function faucet(address recipient, uint amount) external {
    _mint(recipient, amount);
  }
}

contract USDC is ERC20 {
  constructor() ERC20('USDC Stablecoin', 'USDC') {}

  function faucet(address recipient, uint amount) external {
    _mint(recipient, amount);
  }
}
