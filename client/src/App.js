import React, { Component } from "react";
import { Button, Container, Row, Col, Card, Form, FormControl, Image} from "react-bootstrap"
import landingpage from "./images/landingpage.png"
import grimenft_logo from "./images/grimenft_logo.png"


import GrimeNFT from "./contracts/GrimeNFT.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"



const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class App extends Component {

  state = {
    //storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    buffer: null,
    displayNft: 0,
    grimeHash: ``,
    r: null
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GrimeNFT.networks[networkId];
      const instance = new web3.eth.Contract(
        GrimeNFT.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state

      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  captureFile = (event) => {
    event.preventDefault()
    //console.log('file captured')
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = (event) => {



    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      //console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }
        //console.log(result[0].hash)

        this.state.contract.methods.set(result[0].hash).send({ from: this.state.accounts[0] }).then((r) => {
          return this.setState({ grimeHash: result[0].hash, displayNft: 1 })

        })

    })
  }

  onSubmitNFT = (event) => {


    event.preventDefault()
    console.log("Minting NFT...")


    this.state.contract.methods.createGrimeNFT(`https://ipfs.infura.io/ipfs/${this.state.grimeHash}`).send({ from: this.state.accounts[0]})

    this.state.contract.methods.createGrimeNFT(`https://ipfs.infura.io/ipfs/${this.state.grimeHash}`).call({ from: this.state.accounts[0]}).then((r) =>{
      console.log(r); return this.setState({ r })
    })


  }







  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    const displayimage = this.state.displayNft;
    const r = this.state.r;

    return(


      <div
        class="bg_image"
        style={{
        backgroundImage: `url(${landingpage})`, width:"1900x", height:"1080px", margin:"0",padding:"0",
        backgroundSize: "cover",
        }}>
          <Container>
              <br></br>
              <br></br>


                <Container >
                  <Row className="justify-content-between">

                    <img src={grimenft_logo} width="350" height="180" />
                    <Card class="btn-sx" bg="primary" style={{height:'40px', width:'29rem'}} body>{this.state.accounts[0]}</Card>

                  </Row>

                </Container>
          </Container>

          <div >
              <Container fluid style={{padding:'105px'}}  >

                  <Row fluid>
                    <Col>
                        <form  class="btn-sx btn-primary " onSubmit={this.onSubmit} >
                              <input class="btn-sx" type='file' onChange={this.captureFile} />
                              <input class="btn-sx" type='submit'value="Upload To IPFS"/>
                        </form>
                    </Col>

                    <Col>

                        <Card  bg="primary" className="text-center" style={{height:'40px', width:'30rem'}} body>{this.state.grimeHash}</Card>



                    </Col>

                    <Col className='col-xs-2'>


                        <Button  className="text-center" variant="primary" onClick={this.onSubmitNFT} > Mint NFT </Button><bk></bk>
                    </Col>


                  </Row>

              </Container>

              <Container >
                  <Row class="center">
                    <Col>
                        { displayimage !=0  &&
                            <div >
                                <img src={`https://ipfs.infura.io/ipfs/${this.state.grimeHash}`} width="250" height="250" class="center" />
                            </div>}

                        { r !=null  &&
                        <div>
                          <Card bg="primary" style={{height:'40px', width:'15rem'}} body> GrimeNFT Token ID is {this.state.r}</Card>
                        </div>
                        }
                    </Col>
                    <Col >
                      { r !=null  &&
                        <div>
                          <Card bg="primary" style={{height:'40px', width:'15rem'}} body> GrimeNFT Token ID is {this.state.r}</Card>
                        </div>
                      }
                    </Col>
                  </Row>
              </Container>
          </div>


      </div>

    );
  }
}

export default App;



