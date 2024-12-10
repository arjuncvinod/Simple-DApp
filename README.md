
# Simple Token DApp

This project is a simple decentralized application (DApp) that allows users to connect their MetaMask wallet, check their token balance, and transfer tokens to other addresses. The DApp interacts with an Ethereum smart contract deployed on the blockchain to handle token transfers.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Use](#how-to-use)
- [Smart Contract](#smart-contract)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **Simple Token DApp** allows users to:

1. **Connect their MetaMask wallet**: The DApp connects to a user's MetaMask wallet and displays their account address and token balance.
2. **View Token Balance**: Displays the balance of a specific ERC-20 token (STK) in the user's wallet.
3. **Transfer Tokens**: Users can transfer tokens to any recipient by specifying their wallet address and the amount of tokens to send.

This DApp is built using **React** for the frontend and **Ethers.js** for interacting with the Ethereum blockchain.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Ethers.js**: A library for interacting with the Ethereum blockchain.
- **MetaMask**: A browser extension that allows users to interact with Ethereum-based applications.
- **Ethereum**: A decentralized platform for smart contracts.
- **CSS**: For styling the user interface with modern, responsive design.

## Setup and Installation

To run the Simple Token DApp locally, follow these steps:

### 1. Install Dependencies

Make sure you have **Node.js** installed on your system. If not, download and install it from [Node.js](https://nodejs.org/).

Clone this repository to your local machine:

```bash
git clone https://github.com/arjuncvinod/Simple-DApp.git
cd Simple-DApp
```

Install the necessary dependencies:

```bash
npm install
```

### 2. Configure the Smart Contract

- This DApp interacts with an Ethereum smart contract deployed on the network. The contract is an ERC-20 token contract, allowing users to check balances and transfer tokens.

- **Contract Address**: The address of the deployed contract is hardcoded in the `App.js` file:

```javascript
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

Make sure this address corresponds to the smart contract deployed on your network (e.g., local testnet, Rinkeby, or mainnet).

### 3. Set Up MetaMask

You will need **MetaMask** installed in your browser to interact with the Ethereum blockchain.

- Install MetaMask from the [official website](https://metamask.io/download.html).
- Set up MetaMask with your preferred Ethereum network (e.g., Rinkeby, Mainnet, or a local testnet).
- Make sure you have some test Ether or the required tokens for testing transactions.

### 4. Start the Application

Run the application locally using:

```bash
npm start
```

This will start the development server, and you can access the DApp by visiting `http://localhost:3000` in your web browser.

## How to Use

### 1. **Connect Wallet**
   - Click the "Connect Wallet" button to connect your MetaMask wallet to the DApp.
   - Once connected, your account address and token balance will be displayed.

### 2. **Check Token Balance**
   - After connecting your wallet, the current balance of your tokens (STK) will be shown on the screen.

### 3. **Transfer Tokens**
   - Enter the recipient's Ethereum address and the amount of tokens you want to transfer.
   - Click the "Transfer Tokens" button to send the tokens to the specified address.
   - The transaction will be processed, and your balance will update upon success.

### 4. **Error Handling**
   - If there is an error (e.g., invalid address, insufficient funds), an error message will be displayed on the screen.

## Smart Contract

This DApp interacts with a **SimpleToken** contract deployed on the Ethereum blockchain. The contract is an **ERC-20 token** that includes the following functions:

- **balanceOf(address)**: Returns the token balance of the given address.
- **transfer(address recipient, uint256 amount)**: Transfers the specified amount of tokens to the recipient.

Here is a snippet of the smart contract written in Solidity:

```solidity
// SimpleToken.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("SimpleToken", "STK") {
        _mint(msg.sender, initialSupply);
    }
}
```

The contract is deployed at the following address:

```plaintext
0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Folder Structure

The project has the following structure:

```
/simple-token-dapp
│
├── /src
│   ├── /components
│   ├── /pages
│   ├── /styles
│   ├── App.js
│   └── App.css
│
├── /artifacts
│   └── /contracts
│       └── SimpleToken.sol
│
├── package.json
└── README.md
```

- `/src`: Contains all source code for the React application.
- `/artifacts`: Contains the ABI and contract data after compilation.
- `App.js`: Main React component, handles wallet connection, token balance, and transfers.
- `App.css`: Contains the styles for the DApp, making it look modern and responsive.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Here are some ways you can contribute:

- Improve the user interface.
- Add more features such as token transfer history or transaction logs.
- Fix bugs or improve code readability.

## License

This project is open-source and available under the [MIT License](LICENSE).
