import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <ConnectWallet />
    </div>
  );
}
