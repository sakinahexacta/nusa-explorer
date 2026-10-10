import type { AppProps } from "next/app";
import { GameModalProvider } from "@/context/GameModalContext";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <GameModalProvider>
      <Component {...pageProps} />
    </GameModalProvider>
  );
}
