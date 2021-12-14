const GrimeNFT = artifacts.require("./GrimeNFT.sol");



contract("GrimeNFT", accounts => {

  let grimenft_test

  beforeEach(async () => {
    grimenft_test = await GrimeNFT.new()
  })



  describe('deploy and test Name, Symbol, Address....', () => {

    it('deploys successfully', async () => {
      const address = grimenft_test.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('...name', async () => {
      expect(await grimenft_test.name()).to.be.eq("Grime NFT")
    })

    it('...symbol', async () => {
      expect(await grimenft_test.symbol()).to.be.eq("GNFT")
    })

    it('...owner address', async () => {
      expect(await grimenft_test._owner()).to.be.eq(accounts[0])

    })



  })

  describe('...should store IPFS hash string', () => {
    it("...should store hash string.", async () => {
      const grimeNFTInstance = await GrimeNFT.deployed();

      // Set value of abcde
      await grimeNFTInstance.set('abcde', { from: accounts[0] });

      // Get stored value
      const storedData = await grimeNFTInstance.get.call();

      assert.equal(storedData, 'abcde', "The value abcde was not stored.");
    });

  })

  describe('...describes minting', () => {
    

    it('tokenURI is not Null, Undefined', async () => {
      const tokenURI = await grimenft_test.createGrimeNFT
      assert.notEqual(tokenURI, null)
      assert.notEqual(tokenURI, '')
    })






  })














});
