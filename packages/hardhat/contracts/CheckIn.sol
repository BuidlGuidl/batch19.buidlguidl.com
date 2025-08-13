//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchRegistry {
  function checkIn() external;
}


contract CheckIn {
  address owner;
  IBatchRegistry registry;

  constructor(address _registryAddress, address _owner) {
    owner = _owner;
    registry = IBatchRegistry(_registryAddress);
  }

  modifier onlyOwner() {
    require(owner == msg.sender, "This function must be called by the owner");
    _;
  }

  function callCheckIn() public onlyOwner {
    registry.checkIn();
  }
}
