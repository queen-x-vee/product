import { useRouter } from "next/router";
import Navbar from "@/components/nav";
import Footer from "@/components/footer/index.";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.pathname;
  console.log(route)
  const exempted_paths = /^\/business|^\/careers/;
  return (
    <div className="font-inter overflow-x-hidden bg-primary">
      {exempted_paths.test(route) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </div>
  );
}
