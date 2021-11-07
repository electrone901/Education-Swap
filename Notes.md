You need to use hardHat to compile your contract is just like truffle

- To get started `HardHat`: https://hardhat.org/getting-started/#quick-start

# To compile

- npx hardhat compile

# To Deploy

- Start a local node: npx hardhat node

- Open a new terminal and deploy the smart contract in the localhost network: npx hardhat run --network localhost scripts/deploy.js

- As general rule, you can target any network configured in the hardhat.config.js: npx hardhat run --network <your-network> scripts/deploy.js

- To run `scripts on kovan`: npx hardhat run scripts/sample-script.js --network kovan

## Deployed Contract local:

Greeter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

## Deployed Account local:

Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
