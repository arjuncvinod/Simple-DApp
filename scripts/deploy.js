const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Use ethers 6.x API
    const initialSupply = ethers.parseUnits("1000000", 18); // ethers 6.x uses parseUnits directly
    console.log("Initial supply in wei:", initialSupply.toString());

    const Token = await ethers.getContractFactory("SimpleToken");
    const token = await Token.deploy(initialSupply);

    await token.waitForDeployment();
    console.log("Token deployed to:", token.target); // ethers 6.x uses `target` for contract address
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
