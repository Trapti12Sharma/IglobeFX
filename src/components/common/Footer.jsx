import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04143F] text-gray-300 pt-16 pb-0">
      <div className="container mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {/* COLUMN 1 */}
          <div>
            <h3 className="font-semibold mb-4 text-white">iGlobeFX</h3>
            <ul className="space-y-2 text-sm">
              <li>Trading conditions</li>
              <li>Cost of trading</li>
              <li>Swap Rates</li>
              <li>Trading hours</li>
              <li>Algo Traders</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Accounts</h3>
            <ul className="space-y-2 text-sm">
              <li>Live Trading Account</li>
              <li>Deposits</li>
              <li>Withdrawals</li>
              <li>Account Comparison</li>
              <li>Dynamic Leverage</li>
              <li>Islamic Trading Account</li>
              <li>VIP Customer Program</li>
              <li>PAMM Account</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Range of markets</h3>
            <ul className="space-y-2 text-sm">
              <li>Markets</li>
              <li>Currency Market</li>
              <li>Commodities</li>
              <li>Indices</li>
              <li>Digital Currencies</li>
              <li>Shares</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>Trading Platforms</li>
              <li>Download MT5</li>
              <li>Download MT4</li>
              <li>Webtrader (MT4)</li>
              <li>Webtrader (MT5)</li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Offers</h3>
            <ul className="space-y-2 text-sm">
              <li>Free VPS</li>
              <li>Free AlgoBuilder</li>
              <li>Credit bonus</li>
              <li>Risk manager EA</li>
              <li>Free PineConnector</li>
            </ul>
          </div>

          {/* COLUMN 6 */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Why us</li>
              <li>Our Reviews</li>
              <li>Contact us</li>
              <li>Become an IB</li>
              <li>Learn To Trade</li>
              <li>Algo Businesses</li>
            </ul>

            {/* SOCIAL ICONS */}
            <h3 className="font-semibold mt-6 mb-3 text-white">Social</h3>
            <div className="flex items-center gap-4">
              <Facebook size={18} />
              <Instagram size={18} />
              <Twitter size={18} />
              <Linkedin size={18} />
              <Youtube size={18} />
            </div>
          </div>
        </div>

        {/* FREE TOOLS */}
        <div className="border-t border-white/10 my-10"></div>

        <h3 className="text-lg font-semibold mb-6 text-white">Free Tools</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <ul className="space-y-2">
            <li>Free Trading Tools</li>
            <li>Currency Strength Meter</li>
            <li>Pip Calculator</li>
            <li>EA Tools for Traders</li>
            <li>Value at risk Calculator</li>
            <li>Risk Reward ratio Calculator</li>
            <li>Win Rate Calculator</li>
            <li>Trade Return Calculator</li>
            <li>Forex Volatility Calculator</li>
          </ul>

          <ul className="space-y-2">
            <li>Lot size calculator</li>
            <li>Forex Profit Calculator</li>
            <li>Forex Swap Calculator</li>
            <li>CAGR Calculator</li>
            <li>Pivot Point Calculator</li>
            <li>Stop Loss Take Profit Calculator</li>
            <li>Drawdown Calculator</li>
            <li>Forex Market Hours</li>
          </ul>

          <ul className="space-y-2">
            <li>Economic calendar</li>
            <li>Market Heat Map</li>
            <li className="font-semibold text-white">
              Forex Margin Calculator
            </li>
            <li>Forex Compound Calculator</li>
            <li>Risk of Ruin Calculator</li>
            <li>VWAP Calculator</li>
            <li>Forex Forward Rates Calculator</li>
            <li>Fibonacci Calculator</li>
          </ul>

          <ul className="space-y-4 flex flex-col">
            <img src="/assets/award1.png" className="w-28" />
            <img src="/assets/award2.png" className="w-28" />
            <img src="/assets/award3.png" className="w-28" />
            <img src="/assets/award4.png" className="w-28" />
          </ul>
        </div>

        {/* BOTTOM BUTTONS + LOGO */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="logo" className="h-8" />
            <span className="text-sm text-gray-300">iGlobeFX</span>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="bg-green-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-green-500">
              Start trading today
            </button>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-black">
              Try free demo
            </button>
          </div>
        </div>

        {/* LEGAL SECTION */}
        <div className="border-t border-white/10 mt-12 pt-10 text-sm leading-relaxed space-y-6">
          <div className="flex flex-col md:flex-row md:justify-end text-sm gap-3 md:gap-6 mb-6">
            <a href="#" className="text-white hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies Policy
            </a>
            <a href="#" className="hover:underline">
              Product Disclosure
            </a>
            <a href="#" className="hover:underline">
              Financial Services Guide
            </a>
          </div>

          <p>Copyright © 2020–2025 iGlobeFX | All rights reserved.</p>

          <p>
            * Spreads starting as low as 0.0 are only available on the Pro
            account type.
          </p>

          <p>
            Risk Disclaimer: Online trading in leveraged Foreign Exchange and
            CFD instruments contains a high level of risk and may not be
            suitable for all investors...
          </p>

          <p>
            iGlobeFX is a Corporate Authorised Representative of Royal CM LTD.
          </p>

          <p>
            Regional restrictions: iGlobeFX does not provide trading services to
            anyone residing in Australia, U.S.A, Cyprus, Kosovo, North Korea, or
            any restricted region.
          </p>

          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-white underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-white underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>

          <p>
            Address: Suite 126, 117 Old Pittwater road, Brookvale, NSW 2100,
            Australia.
          </p>
        </div>
      </div>
    </footer>
  );
}
