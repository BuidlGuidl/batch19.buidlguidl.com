// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    address public owner;
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry) {
        owner = msg.sender;
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkMeIn() external {
        require(msg.sender == owner, "Only owner can check in");
        batchRegistry.checkIn();
    }
}
