//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    event CheckInCalled(address indexed caller, address indexed batchRegistry);

    constructor(address _batchRegistry, address initialOwner) Ownable(initialOwner) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function callCheckIn() external onlyOwner {
        batchRegistry.checkIn();
        emit CheckInCalled(msg.sender, address(batchRegistry));
    }

    function updateBatchRegistry(address _newBatchRegistry) external onlyOwner {
        require(_newBatchRegistry != address(0), "Invalid address");
        batchRegistry = IBatchRegistry(_newBatchRegistry);
    }

    function getBatchRegistry() external view returns (address) {
        return address(batchRegistry);
    }
}
