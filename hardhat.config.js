require("@nomicfoundation/hardhat-ethers");

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.28" }, // For Lock.sol and other contracts using ^0.8.28
            { version: "0.8.20" }  // For OpenZeppelin contracts using ^0.8.20
        ]
    },
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545"
        }
    }
};
