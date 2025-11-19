import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      title: "Trading",
      links: ["Overview", "Platforms", "Tools", "Pricing"],
    },
    {
      title: "Markets",
      links: ["Forex", "Commodities", "Indices", "Crypto"],
    },
    {
      title: "Accounts",
      links: ["Standard", "Pro", "Islamic", "Demo Account"],
    },
    {
      title: "Resources",
      links: ["Education", "Economic Calendar", "News", "Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Legal Docs"],
    },
  ];

  return (
    <header className="w-full bg-nav-gradient text-black fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <img src="/assets/logo.png" alt="logo" className="h-10" />
          <span>iGlobeFX</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-igloo-cyan transition">
                {item.title}
                <ChevronDown size={16} className="mt-[2px]" />
              </button>

              {/* DROPDOWN */}
              {openMenu === index && (
                <div className="absolute left-0 mt-3 bg-white text-black shadow-xl rounded-lg p-4 w-48 transition-all z-50">
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to="/"
                      className="block py-2 px-2 rounded hover:bg-gray-100"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link className="hover:text-igloo-cyan">Client Login</Link>

          {/* CTA BUTTON */}
          <button className="bg-green-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-green-500 transition flex items-center gap-2">
            Open Account →
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#04143F] text-white px-6 py-4 space-y-4">
          {menuItems.map((item, index) => (
            <details key={index} className="group">
              <summary className="cursor-pointer py-2 flex justify-between items-center text-lg">
                {item.title}
                <ChevronDown size={18} />
              </summary>

              <div className="pl-4 mt-2 space-y-2">
                {item.links.map((link, i) => (
                  <Link
                    key={i}
                    to="/"
                    className="block py-1 hover:text-igloo-cyan"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          <hr className="border-white/20" />

          <button className="w-full bg-green-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-green-500 transition">
            Open Account →
          </button>

          <Link className="block mt-3 text-center">Client Login</Link>
        </div>
      )}
    </header>
  );
}
