import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home-container/home/Home'
import PetDetails from './components/home-container/pet-details/PetDetails'
import CreatePet from './components/create-post/CreatePet'
// import { swapperAddress } from '../config'
import SwapperContract from './artifacts/contracts/Swapper.sol/Swapper.json'

function App() {
  // Add variables
  const [address, setAddress] = useState('')
  let [contract, setContract] = useState(null)

  const loadWeb3 = async () => {}

  const getContract = async () => {}

  const connectWallet = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    console.log('provider', provider)

    const { chainId } = await provider.getNetwork()
    console.log('chainId', chainId)

    const signer = provider.getSigner()
    const walletAddress = await signer.getAddress()
    console.log('walletAddress', walletAddress)
    setAddress(walletAddress)

    contract = new ethers.Contract(
      '0x1b07357e0576f00EA45181Ec5D21Feb8968d4779',
      SwapperContract.abi,
      signer,
    )
    setContract(contract)
    await contract.uniswapRouter()
  }
  console.log('**contract', contract)

  return (
    <Router>
      <div className="cl">
        <Navbar address={address} connectWallet={connectWallet} />

        <Route path="/">
          <Home address={address} contract={contract} />
        </Route>

        <Switch>
          <Route exact path="/create-pet" component={CreatePet} />
          <Route path="/pet-details/:petId">
            <PetDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
