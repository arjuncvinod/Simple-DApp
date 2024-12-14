import { useState } from "react";
import { BrowserProvider, ethers } from "ethers";
import SimpleTokenABI from "../../artifacts/contracts/SimpleToken.sol/SimpleToken.json"; // Import ABI
import "./App.css";

// Contract Address
const CONTRACT_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Connect to MetaMask wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = await provider.getSigner();
      const account = await signer.getAddress();
      setAccount(account); // Save the account in state

      const contract = new ethers.Contract(CONTRACT_ADDRESS, SimpleTokenABI.abi, signer);

      // Fetch balance
      const balanceRaw = await contract.balanceOf(account);
      const balanceFormatted = ethers.utils.formatUnits(balanceRaw, 18); // Adjust for token decimals
      setBalance(balanceFormatted);

      console.log("Connected Account:", account);
      console.log("Balance:", balanceFormatted);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  // Transfer tokens
  const transferTokens = async () => {
    try {
      if (!recipient || !amount) {
        setErrorMessage("Please enter a recipient address and amount.");
        return;
      }

      const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
      await tx.wait();

      // Update balance after transfer
      const updatedBalance = await contract.balanceOf(account);
      setBalance(ethers.utils.formatUnits(updatedBalance, 18));
      setErrorMessage("");
      alert("Tokens transferred successfully!");
    } catch (error) {
      console.error("Failed to transfer tokens:", error);
      setErrorMessage("Failed to transfer tokens. Please check your input.");
    }
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <h1>Simple Token DApp</h1>

        {!account ? (
          <div className="connect-section">
            <button onClick={connectWallet} className="connect-button">
              Connect Wallet
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        ) : (
          <div className="wallet-info">
            <p><strong>Connected Account:</strong> {account}</p>
            <p><strong>Balance:</strong> {balance} STK</p>

            <h2>Transfer Tokens</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-field"
              />
            </div>
            <button onClick={transferTokens} className="transfer-button">
              Transfer Tokens
            </button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
