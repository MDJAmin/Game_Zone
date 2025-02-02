"use client";
import Nav, { Login, NavLink, NavLogo, SignUp } from "../Components/ui/Nav";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";

export default function AdminLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="absolute right-0 left-0">
        <div className="relative z-10">
          <Nav>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  src="/assets/logo/Icon gamepad.jpeg"
                  alt="Logo"
                  className="sm:w-5 w-4 sm:h-7 h-5"
                />
                <NavLogo href="#">GameZone</NavLogo>
              </div>
              <div className="hidden md:flex gap-3">
                <NavLink href="#">Dashboard</NavLink>
                <NavLink href="#">Games</NavLink>
                <NavLink href="#">Orders</NavLink>
              </div>
            </div>
            <div className="hidden xl:flex gap-4">
              <Login href="#">Login</Login>
              <SignUp href="#">Sign up</SignUp>
            </div>
            <div className="md:hidden relative">
              <IoMenu
                className="relative top-1 cursor-pointer text-2xl hover:text-[#FF4553]"
                onClick={handleMenuToggle}
              />
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute gap-4 flex top-8 flex-col right-0 bg-[#1A242E] shadow-md p-4 w-48 rounded-sm"
                >
                  <NavLink href="#">Dashboard</NavLink>
                  <NavLink href="#">Games</NavLink>
                  <NavLink href="#">Orders</NavLink>
                  <div className="flex flex-col gap-8 py-4 ps-3">
                    <Login href="#">Login</Login>
                    <SignUp href="#">Sign up</SignUp>
                  </div>
                </div>
              )}
            </div>
          </Nav>
        </div>
      </div>
      <div className="mx-0">{children}</div>
    </>
  );
}
