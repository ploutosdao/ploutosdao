// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "hardhat/console.sol";

error GreeterError();

contract Greeter {
    string public greeting;
    string header;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        header = "a new thing";
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function throwError() external pure {
        revert GreeterError();
    }
}