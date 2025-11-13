// src/components/Footer.jsx
import React from "react";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
// Replace with your real logo import
import Logo from "/rydex-dark.svg";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Add Vehicles", href: "/add-vehicle" },
      { label: "All Vehicles", href: "/all-vehicles" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "My Account", href: "/account" },
      { label: "My Bookings", href: "/my-bookings" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Discord", icon: <FaDiscord className="inline-block" />, href: "#" },
      { label: "Instagram", icon: <FaInstagram className="inline-block" />, href: "#" },
      { label: "Telegram", icon: <FaTelegramPlane className="inline-block" />, href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo + copyright */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Rydex" className="h-9 w-auto" />
            </div>
            <p className="mt-4 text-sm text-[#bdbdbd]">© 2025 Rydex. All rights reserved.</p>
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-lg text-white font-semibold mb-4">{col.title}</h4>

                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.icon ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-3 text-sm text-[#bdbdbd] hover:text-white transition-colors"
                        >
                          <span className="text-xl text-[#bdbdbd]">{link.icon}</span>
                          <span>{link.label}</span>
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-[#bdbdbd] hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="mt-10 border-t border-gray-700/50" />

        {/* bottom row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="order-2 md:order-1">
            <nav className="flex gap-6 text-sm text-[#bdbdbd]">
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms" className="hover:text-white">Terms of Service</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm text-[#9e9e9e]">Built with care • <span className="text-white"><a href="https://github.com/sazz-dev">Sazz</a></span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
