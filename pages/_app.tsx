import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ReplyHub.cc</title>
      </Head>
      <Script
        src="https://kit.fontawesome.com/cfdb4bba6b.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />

      <div className="flex flex-col bg-white">
        <header className="py-4 px-8">
          <svg
            className="w-16 h-16"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="90" height="90" fill="white" />
            <path
              d="M12.6188 63V28.0909H27.6869C30.2778 28.0909 32.5449 28.5625 34.4881 29.5057C36.4313 30.4489 37.9426 31.8068 39.0222 33.5795C40.1017 35.3523 40.6415 37.4773 40.6415 39.9545C40.6415 42.4545 40.0847 44.5625 38.971 46.2784C37.8688 47.9943 36.3176 49.2898 34.3176 50.1648C32.329 51.0398 30.0051 51.4773 27.346 51.4773H18.346V44.1136H25.4369C26.5506 44.1136 27.4994 43.9773 28.2835 43.7045C29.079 43.4205 29.6869 42.9716 30.1074 42.358C30.5392 41.7443 30.7551 40.9432 30.7551 39.9545C30.7551 38.9545 30.5392 38.142 30.1074 37.517C29.6869 36.8807 29.079 36.4148 28.2835 36.1193C27.4994 35.8125 26.5506 35.6591 25.4369 35.6591H22.096V63H12.6188ZM33.0733 46.9773L41.8006 63H31.5051L22.9824 46.9773H33.0733ZM45.8813 63V28.0909H55.3585V41.7273H67.904V28.0909H77.3813V63H67.904V49.3636H55.3585V63H45.8813Z"
              fill="#181923"
            />
          </svg>
        </header>

        <main className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">RIP 04.04.2022</h1>
          <h2 className="text-2xl font-bold mb-4">Featured on:</h2>
          <a
            href="https://hackernoon.com/having-trouble-keeping-up-gngm-tweets-try-this-tool-instead"
            target="_blank"
            className="mb-6"
          >
            <Image
              src="https://hackernoon.com/hn-logo.png"
              alt="Hackernoon Logo"
              width={128}
              height={64}
            />
          </a>
          <a
            className="twitter-timeline mt-8"
            data-lang="en"
            data-width="600"
            data-height="500"
            data-dnt="true"
            data-theme="light"
            href="https://twitter.com/replyhubHQ"
          >
            Tweets by ReplyHubHQ
          </a>
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></Script>
        </main>

        <footer className="bg-gray-100 py-6 fixed bottom-0 w-full opacity-75">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center md:justify-between items-center">
              <div className="flex items-center space-x-2 md:space-x-3">
                <a
                  href="https://twitter.com/poyo_eth"
                  className="text-green-500 text-xs md:text-sm underline"
                >
                  <i className="fab fa-twitter text-green-500 text-2xl md:text-lg"></i>
                  @Poyo
                </a>
              </div>
              <div className="flex items-center mt-2 md:mt-0 md:ml-3 space-x-2 md:space-x-3">
                <a
                  href="https://twitter.com/zizibiziETH"
                  className="text-purple-500 text-xs md:text-sm underline"
                >
                  <i className="fab fa-twitter text-purple-500 text-2xl md:text-lg"></i>
                  @zizibizi
                </a>
              </div>
              <div className="flex items-center mt-2 md:mt-0 md:ml-3 space-x-2 md:space-x-3">
                <a
                  href="https://twitter.com/otterolie"
                  className="text-blue-500 text-xs md:text-sm underline"
                >
                  <i className="fab fa-twitter text-blue-500 text-2xl md:text-lg"></i>
                  @OtterOlie
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
