import { useState } from 'react'
import { StylesProvider, Container } from '@material-ui/core'
import './Home.css'
import PetGallery from '../gallery/PetGallery'
import { Flex, Box, Image, Text, Button, Input } from '@chakra-ui/react'
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons'
import Logo from '../../../images/etherLogo.png'
import { ethers } from 'ethers'

function Home({ address, contract }) {
  const [ethAmount, setEthAmount] = useState('')
  const [coinSelected, setCoinSelected] = useState('DAI')
  const [coinSelectedAmount, setCoinSelectedAmount] = useState('')

  console.log(
    'ethAmount,  coinSelected, coinSelectedAmount, address ',
    ethAmount,
    coinSelected,
    coinSelectedAmount,
    address,
  )

  // const selectedCoin = createRef()
  // let [coinSelected, setCoinSelectedAmount] = useState('')
  // console.log(' coinToConvert', coinToConvert)

  const handleSwap = async () => {
    if (!address) {
      alert('Please connect your wallet!')
    } else if (ethAmount < 0.0001 || coinSelectedAmount <= 0) {
      alert('Please enter a bigger amount to convert!')
    } else {
      let ethValueToConvert = ethers.utils.parseUnits(ethAmount, 'ether')

      let transactionHash = await contract.convertExactEthToDai(address, {
        value: ethValueToConvert,
      })
      let tx = await transactionHash.wait()
      console.log('tx', tx)
    }
  }
// display transaction hash as a pop up 
  return (
    <StylesProvider injectFirst>
      <Container>
        <div className="label-btns">
          <Box
            w="30.62rem"
            mx="auto"
            mt="5.25rem"
            boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
            borderRadius="1.37rem"
          >
            <Flex
              alignItems="center"
              p="1rem 1.25rem 0.5rem"
              bg="white"
              color="rgb(86, 90, 105)"
              justifyContent="space-between"
              borderRadius="1.37rem 1.37rem 0 0"
            >
              <Text color="black" fontWeight="500">
                Swap
              </Text>
              <SettingsIcon
                fontSize="1.25rem"
                cursor="pointer"
                _hover={{ color: 'rgb(128,128,128)' }}
              />
            </Flex>

            <Box p="0.5rem" bg="white" borderRadius="0 0 1.37rem 1.37rem">
              <Flex
                alignItems="center"
                justifyContent="space-between"
                bg="rgb(247, 248, 250)"
                p="1rem 1rem 1.7rem"
                borderRadius="1.25rem"
                border="0.06rem solid rgb(237, 238, 242)"
                _hover={{ border: '0.06rem solid rgb(211,211,211)' }}
              >
                <Box>
                  <Button
                    bg="white"
                    borderRadius="1.12rem"
                    boxShadow="rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem"
                    fontWeight="500"
                    mr="0.5rem"
                    rightIcon={
                      <ChevronDownIcon fontSize="1.37rem" cursor="pointer" />
                    }
                  >
                    <Image boxSize="1.5rem" src={Logo} alt="Logo" mr="0.5rem" />
                    ETH
                  </Button>
                </Box>
                <Box>
                  <Input
                    placeholder="0.0"
                    fontWeight="500"
                    fontSize="1.5rem"
                    width="100%"
                    size="19rem"
                    textAlign="right"
                    bg="rgb(247, 248, 250)"
                    outline="none"
                    border="none"
                    focusBorderColor="none"
                    type="number"
                    value={ethAmount}
                    onChange={(e) => setEthAmount(e.target.value)}
                  />
                </Box>
              </Flex>

              <Flex
                alignItems="center"
                justifyContent="space-between"
                bg="rgb(247, 248, 250)"
                pos="relative"
                p="1rem 1rem 1.7rem"
                borderRadius="1.25rem"
                mt="0.25rem"
                border="0.06rem solid rgb(237, 238, 242)"
                _hover={{ border: '0.06rem solid rgb(211,211,211)' }}
              >
                <Box>
                  <select
                    value={coinSelected}
                    onChange={(e) => setCoinSelected(e.target.value)}
                    style={{
                      backgroundColor: 'rgb(207, 0, 99)',
                      color: 'white',
                      fontSize: '1rem',
                      borderRadius: `12px`,
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      paddingLeft: '18px',
                      paddingRight: '15px',
                    }}
                  >
                    <option value="DAI">DAI</option>
                    <option value="CUSD">CUSD</option>
                  </select>
                </Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bg="white"
                  p="0.18rem"
                  borderRadius="0.75rem"
                  pos="relative"
                  top="-2.37rem"
                  left="2.5rem"
                >
                  <ArrowDownIcon
                    bg="rgb(247, 248, 250)"
                    color="rgb(128,128,128)"
                    h="1.5rem"
                    width="1.62rem"
                    borderRadius="0.75rem"
                  />
                </Flex>
                <Box>
                  <Input
                    placeholder="0.0"
                    fontSize="1.5rem"
                    width="100%"
                    size="19rem"
                    textAlign="right"
                    bg="rgb(247, 248, 250)"
                    outline="none"
                    border="none"
                    focusBorderColor="none"
                    type="number"
                    value={coinSelectedAmount}
                    onChange={(e) => setCoinSelectedAmount(e.target.value)}
                  />
                </Box>
              </Flex>

              <Box mt="0.5rem">
                <Button
                  color="rgb(213, 0, 102)"
                  bg="rgb(253, 234, 241)"
                  width="100%"
                  p="1.62rem"
                  borderRadius="1.25rem"
                  _hover={{ bg: 'rgb(251, 211, 225)' }}
                  onClick={handleSwap}
                >
                  Swap
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
        <PetGallery />
      </Container>
    </StylesProvider>
  )
}

export default Home
