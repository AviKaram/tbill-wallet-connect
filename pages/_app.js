import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.SEPOLIA}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
