import React, { useState, useEffect } from "react";

// Others
import { motion } from "framer-motion";

// Components
import Header from "./header";

// Heroicons
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";

// Assets
import WorldImageSvg from "../../assets/world.asset.svg";
import FlagExample from "../../assets/united-states-flag.asset.svg";
import EthIcon from "../../assets/ethereum.asset.svg";
import BullIcon from "../../assets/bull.asset.svg";
import InstagramIcon from "../../assets/instagram.asset.svg";
import DiscordIcon from "../../assets/discord.asset.svg";
import GithubIcon from "../../assets/github.asset.svg";
import ReactIcon from "../../assets/react.asset.svg";
import EthColorIcon from "../../assets/ethereum-color.asset.svg";
import TailwindIcon from "../../assets/tailwindcss.asset.svg";

// Web3
import {
  injected,
  fortmatic,
  portis,
  walletconnect,
} from "../../connectors/connector";
import { useWeb3React } from "@web3-react/core";

export default function Home() {
  let currentYear = new Date().getFullYear();

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connectWalletConnect() {
    try {
      activate(walletconnect);
      console.log(account);
    } catch (e) {
      console.log(e);
    }
  }

  async function connectFortmatic() {
    try {
      activate(fortmatic);
      console.log(account);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnectFortmatic() {
    try {
      await deactivate(fortmatic);
      console.log(account);
    } catch (e) {
      console.log(e);
    }
  }

  async function connectMetamask() {
    try {
      await activate(injected);
      console.log(account || "0x0");
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnectMetamask() {
    try {
      await deactivate(injected);
      console.log(account);
    } catch (e) {
      console.log(e);
    }
  }

  async function connectPortis() {
    try {
      await activate(portis);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnectPortis() {
    try {
      await deactivate(portis);
      console.log(portis);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="body">
        <Header />
        <body>
          <section className="h-52">
            <img
              className="top-0 z-0 absolute right-0 overflow-x-hidden"
              src={WorldImageSvg}
              alt="Flagnation world"
            />
            <div className="z-10 mt-12 ml-2">
              <div className="font-poppins font-semibold text-gray-50 w-72 text-md p-2">
                <h2 className="">
                  The first flag marketplace on the Ethereum blockchain
                </h2>
              </div>
              <div className="m-2 mt-4">
                <a
                  href="/market"
                  className="p-2 shadow-xl pl-3 pr-3 rounded-md font-ropa text-gray-200 border border-white"
                >
                  Explore
                </a>
              </div>
            </div>
          </section>
          <section className="about">
            <div className="flex flex-col mx-auto text-center items-center text-white font-josefin pb-5 w-10/12">
              <h2 className="text-xl mt-5 mb-3">What is Flagnation?</h2>
              <div>
                <p className="font-montserrat text-white text-sm text-left">
                  Flagnation is a decentralized market where you can buy all
                  kinds of flags. There will be a total of 10,000 flags with
                  proof of ownership stored on the Ethereum blockchain.
                </p>
                <p className="font-montserrat text-white text-sm mt-4 text-left">
                  Flagnation is an NFT inspired by the{" "}
                  <a
                    href="https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    ERC-721
                  </a>{" "}
                  token standard.
                </p>
              </div>
            </div>
          </section>
          <section className="h-20"></section>
          <section className="z-30 trending mb-11">
            <div className="flex flex-col text-center items-center text-white font-josefin pb-5">
              <h2 className="text-xl mt-3 mb-3">Trending flags</h2>
              <div className="flex items-center">
                <div>
                  <ChevronLeftIcon className="mr-1" width="25" height="25" />
                </div>
                <div className="p-3 rounded-md card-dark">
                  <div className="flex items-center">
                    <div>
                      <img src={FlagExample} alt="Flag" />
                    </div>
                    <div className="ml-3">United States</div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>Price: 2.4M</div>
                    <div className="flex ml-5">
                      <a
                        href="/flags/1"
                        className="flex light-button rounded-md p-1 mr-2 pr-1"
                      >
                        <EyeIcon width="16" className="mr-1" />
                        View
                      </a>
                      <a
                        href="/flags/1"
                        className="flex light-button rounded-md p-1 pr-2"
                      >
                        <img
                          src={EthIcon}
                          className="w-4 h-4 mr-1 mt-1 flex"
                          alt=""
                        />
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon className="ml-1" width="25" height="25" />
                </div>
              </div>
            </div>
          </section>
          <footer className="footer bottom-0 fixed w-full sm:pt-4 p-2 sm:pb-4 sm:items-center text-white">
            <div className="flex items-center justify-between">
              <div className="font-francois flex items-center">
                <div>Flagnation</div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-xs mr-2">Made with</p>
                <img className="mr-1" src={ReactIcon} alt="React" />
                <img className="mr-1" src={EthColorIcon} alt="Ethereum" />
                <img src={TailwindIcon} alt="TailwindCSS" />
              </div>
            </div>
          </footer>
        </body>
      </div>
    </div>
  );
}
