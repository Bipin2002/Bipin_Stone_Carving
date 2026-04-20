import React, { useEffect, useState } from "react";
import { NavbarMenu } from "../../MockData/data";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"}
        `}
      >
        <div className="flex items-center justify-between px-6 lg:px-20 py-4">

          {/* Logo */}
 <img
              src="src/assets/4.png"
              alt="Bipin Stone Carving Logo"
              className="h-12 sm:h-14 object-contain invert brightness-0"
            />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 text-sm font-medium uppercase tracking-wide text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `transition-colors duration-200
                      ${isActive
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "hover:text-primary"}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {/* <NavLink
              to="/contact"
              className="bg-primary text-black px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-secondary transition"
            >
              Contact
            </NavLink> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle navigation menu"
            className="lg:hidden text-white text-3xl z-50"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
