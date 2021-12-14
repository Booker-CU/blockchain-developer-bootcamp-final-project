// SPDX-License-Identifier: MIT

pragma solidity ^0.6.1;

import "../client/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../client/node_modules/@openzeppelin/contracts/access/Ownable.sol";



contract GrimeNFT is ERC721, Ownable {

  address payable public _owner;
  uint256 tokenCounter =0;

  string grimeHash;
  mapping(string => bool) _uriExists;


  constructor() public ERC721 ("Grime NFT", "GNFT") {
    _owner = msg.sender;
  }


  function set(string memory _grimeHash) public onlyOwner {
    grimeHash = _grimeHash;
  }

  function get() public view returns (string memory) {
    return grimeHash;
  }



  function createGrimeNFT(string memory tokenURI) public onlyOwner returns (uint256) {
    require(msg.sender != address(0), "ERC721: mint to the zero address");
    require(!_uriExists[tokenURI], "ERC721: token already minted");

    uint256 newItemId = tokenCounter;
    _safeMint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    tokenCounter = tokenCounter +1;
    _uriExists[tokenURI] = true;

    return newItemId;
  }

}


