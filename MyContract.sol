// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public greeting = "Hello, Base!";

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
