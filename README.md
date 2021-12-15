
# **GrimeNFT (IPFS upload and ERC721 Minting utility)**

## Consensys Academy Final Project

GrimeNFT is a simple utility to upload a digital item to IPFS, and mint  the item to an ERC721 token. (GNFT) 

(what is [Grime](https://www.newyorker.com/magazine/2018/10/01/the-surprising-survival-of-grime)*?) 

In short… “_Grime is a genre of electronic music that emerged in East London in the early 2000s. It developed out of the earlier UK dance styles UK garage, and draws influences from jungle, dancehall, and 2-step_.”

When searching for music/art NFTs on platforms such as Opensea or Rarible, I found it difficult to search by genre, specifically Grime. The idea behind this is to have a token that would make it easier to find Grime on NFT platforms.

*this project was inspired by a DappUni repro

## Demo Walkthrough Video

[https://www.loom.com/share/2602c26864b04484bc4b6fb15fba44eb](https://www.loom.com/share/2602c26864b04484bc4b6fb15fba44eb)

## Project Website Link:

cautious-process.surge.sh

Please use **MetaMask** and be on the **Ropsten Test Network**.

(will need test Ether for transactions)

## To run this project locally, you will need the following installed



* VS Code or similar editor.
* Truffle v5.4.21 
* Node v14.16.0
* Web3.js v1.5.3

## Dependencies



* Ipfs-http-client 33.1.1
* Openzeppelin/CLI 2.8.2
* Openzeppelin/contracts @3.4.0 (must* use 3.4.0)
* Truffle/hdwallet-provider 2.0.0
* Dotenv
* React-bootstrap 
* Chai
* Babel

## Instructions:

1. Clone repository.
2. cd into the **Client **folder and npm install all the dependencies at command-line.
3. Start Ganache
4. Inside the Main project folder, at command-line run Truffle Compile.
5. At **Client **folder** **command-line, type npm run start.
6. To run **Tests**… at Main project folder command-line run Truffle Test.

## Improvements:

Originally the goal was to be focused on uploading audio files (as NFTs), but had issues displaying an audio file back to the frontend (kept it as an image file for demo).

Initially I had hoped to be able to mint the NFT directly to Rarible or Opensea, but found it challenging using their protocol. This project uses an older ERC721 protocol from OpenZeppelin which has been upgraded, which is why you need to use that specific version.

Some of the key improvements I would do:

* Update the OpenZeppelin contract to the newest version.
* Allow a user to create metadata for the item when minting.
* Allow the frontend to update the page for either image files or audio files.
* Mint directly to Rarible / Opensea or another NFT platform.
* Better frontend (found it difficult to design frontend using React, React-Bootstrap)

## Consensys Certificate as NFT

Eth Address: 0x82B17Ad6d3bab6611F9F3c7Ca9231110253D1401
