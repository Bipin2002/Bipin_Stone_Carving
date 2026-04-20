import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../MockData/data";
import { NavLink } from "react-router-dom";

const menuVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-40 bg-black/85 backdrop-blur-lg"
        >
          <div className="flex flex-col items-center justify-center h-full gap-10 text-white uppercase tracking-widest text-lg font-semibold">

            {NavbarMenu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition duration-300
                  ${isActive
                    ? "text-primary scale-110"
                    : "hover:text-primary"}`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 bg-primary text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-secondary transition"
            >
              Contact Us
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
