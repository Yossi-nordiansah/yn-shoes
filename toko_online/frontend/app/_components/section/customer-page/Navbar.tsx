"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between shadow-lg py-2 px-4 fixed z-50 w-full bg-white">
        <div className="flex gap-4 items-center justify-between w-full lg:w-auto">
          {/* Logo */}
          <div className="flex items-center sm:gap-2 gap-1">
            <img src="/images/logo.png" alt="Logo" className="md:h-10 h-8" />
            <h1 className="font-bold text-2xl lg:text-3xl italic">YN Shoes</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex text-slate-500 gap-6 items-center ml-5">
            <li>
              <Link className="hover:font-semibold text-slate-700" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-semibold text-slate-700"
                href="/products"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-semibold text-slate-700"
                href="/brands"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-semibold text-slate-700"
                href="/size-guide"
              >
                Size Guide
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-semibold text-slate-700"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="bg-slate-100 rounded-full px-2 py-1 flex items-center gap-2">
                <div className="text-slate-300">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-md border-none outline-0 text-sm bg-transparent"
                />
              </div>
            </li>
          </ul>

          {/* Mobile/Tablet: Hamburger and Icons */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Icons - visible on mobile/tablet */}

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="text-slate-700 cursor-pointer">
            <FaHeart size={24} />
          </div>
          <div className="text-slate-700 cursor-pointer">
            <FaShoppingBag size={24} />
          </div>
          <div className="text-slate-700 cursor-pointer">
            <FaComment size={24} />
          </div>
          <div className="text-slate-700 cursor-pointer">
            <FaUser size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[45px] left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out lg:hidden z-40 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Search Bar */}
          <div className="bg-slate-50 rounded-full px-4 py-2 flex items-center gap-2">
            <div className="text-slate-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-none outline-0 text-sm bg-transparent"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col text-slate-500 gap-4">
            <li>
              <Link
                className="block hover:font-semibold text-slate-700 py-2 border-b border-slate-100"
                href="/"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block hover:font-semibold text-slate-700 py-2 border-b border-slate-100"
                href="/products"
                onClick={toggleMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="block hover:font-semibold text-slate-700 py-2 border-b border-slate-100"
                href="/brands"
                onClick={toggleMobileMenu}
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                className="block hover:font-semibold text-slate-700 py-2 border-b border-slate-100"
                href="/size-guide"
                onClick={toggleMobileMenu}
              >
                Size Guide
              </Link>
            </li>
            <li>
              <Link
                className="block hover:font-semibold text-slate-700 py-2 border-b border-slate-100"
                href="/contact"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Additional Icons for Mobile */}
          <div className="flex gap-8 items-center justify-center pt-4 border-t border-slate-100">
            <div className="text-slate-700 cursor-pointer">
              <FaComment size={24} />
            </div>
            <div className="text-slate-700 cursor-pointer">
              <FaUser size={24} />
            </div>
            <div className="text-slate-700 cursor-pointer">
              <FaHeart size={20} />
            </div>
            <div className="text-slate-700 cursor-pointer">
              <FaShoppingBag size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
