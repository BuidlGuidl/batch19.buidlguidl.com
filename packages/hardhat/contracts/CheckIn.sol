// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @notice Minimal interface to interact with the BatchRegistry contract
interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    address public owner;
    address public batchRegistry;

    /// @notice Set the BatchRegistry address and owner
    /// @param _batchRegistry The deployed BatchRegistry contract address
    constructor(address _batchRegistry) {
        owner = msg.sender; // whoever deploys this contract becomes the owner
        batchRegistry = _batchRegistry;
    }

    /// @notice Call the checkIn function on the BatchRegistry
    function callCheckIn() external {
        require(msg.sender == owner, "Not the owner");
        IBatchRegistry(batchRegistry).checkIn();
    }

    /// @notice Change the BatchRegistry address if needed
    function setBatchRegistry(address _batchRegistry) external {
        require(msg.sender == owner, "Not the owner");
        batchRegistry = _batchRegistry;
    }

    /// @notice Transfer ownership of this contract
    function transferOwnership(address newOwner) external {
        require(msg.sender == owner, "Not the owner");
        owner = newOwner;
    }
}
