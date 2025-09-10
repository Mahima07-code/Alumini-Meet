import React from "react";

const Navbar2 = () => {
  const menuItems = [
    "Home",
    "Directory",
    "Browse",
    "Sign Up",
    "Sign In",
    "Profile",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-16 z-40 flex justify-center mt-6">
      <ul className="flex gap-6 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full shadow-md">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer text-sm  text-pink-100 font-medium px-3 py-1 rounded-full hover:bg-white/30 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar2;
