import { useAddress, useMetamask, ThirdwebProvider } from "@thirdweb-dev/react";
import { useState } from "react";

const activeChain = "sepolia"; // Simulation only!

function App() {
  const connect = useMetamask();
  const address = useAddress();
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const handleSimulate = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) return;
    const apy = 4.2;
    const term = 90;
    const interest = (amt * (apy / 100) * term) / 365;
    setResult({
      deposit: amt.toFixed(3),
      interest: interest.toFixed(3),
      total: (amt + interest).toFixed(3),
    });
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>💸 Tokenized T-Bill Simulator (Sepolia)</h1>
      {address ? (
        <div>
          <p>Wallet Connected: {address}</p>
          <input
            type="number"
            placeholder="Enter ETH (Sepolia)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleSimulate}>Simulate Yield</button>

          {result && (
            <div style={{ marginTop: 16 }}>
              <p>📥 Deposit: {result.deposit} ETH</p>
              <p>📈 Interest (90 days @ 4.2% APY): {result.interest} ETH</p>
              <p>💰 Total on Maturity: {result.total} ETH</p>
            </div>
          )}
        </div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <App />
    </ThirdwebProvider>
  );
}
