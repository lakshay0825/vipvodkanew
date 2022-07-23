import React from "react";
import "./css-files/styles.css";
import { Navbar } from "../../components/navbar";
import Header from "./Header";
import Wallet from "./Wallet";
import Packages from "./Packages";
import BitcoinCalculator from "./BitcoinCalculator";
import Experts from "./Experts";
import CryptoGraph from "./CryptoGraph";
import BitcoinNews from "./BitcoinNews";
import Footer from "./Footer";

export const VIPCryptocurrency = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Wallet />
    <Packages />
    <BitcoinCalculator />
    <Experts />
    <CryptoGraph />
    <BitcoinNews />
    <Footer />
    </>
  );
}
