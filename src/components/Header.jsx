import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur-md rounded-full mx-8 mt-4 shadow-lg">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src="https://thumbs.dreamstime.com/z/free-wifi-icon-isolated-black-background-wireless-internet-connection-concept-network-logo-vector-flat-design-142211240.jpg"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl text-pink-200 font-bold tracking-wide">Alumni Network</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/30">
        <Search className="w-5 h-5 text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent outline-none placeholder-white text-sm"
        />
      </div>
    </header>
  );
};

export default Header;
