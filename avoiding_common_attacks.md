# Security

## SWC-123
The `createGrimeNFT()` function uses two `require` statements.
  1) requires: must mint to the zero address.
  2) requires: the tokenURI must not already exist. 
