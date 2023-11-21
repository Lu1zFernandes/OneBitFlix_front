import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
