import Footer from "@/components/footer/index.";
import Navbar from "@/components/nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-inter overflow-x-hidden bg-primary">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
