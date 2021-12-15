# Security

## SWC-123
The `createGrimeNFT()` function uses two `require` statements.
  1) Require Statement: must mint to the zero address.
  2) Require Statement: the tokenURI must not already exist. 

## SWC-125
The `_uriExists` mapping to `tokenURI` is set to true at the end of the `createGrimeNFT()` function.
This along with the second `require` statement at the start of the function, is used to keep a user from minting an NFT with the same `tokenURI` twice.
