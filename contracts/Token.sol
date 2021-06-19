// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract Ploutos is ERC20Upgradeable {
  function initialize() initializer public {
    __ERC20_init('Ploutos Wealth Manager', 'PLT');
  }

  function faucet(address recipient, uint amount) external {
    _mint(recipient, amount);
  }
}