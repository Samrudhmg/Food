import React from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

const Navbar = () => (
  <nav className="flex justify-around items-center py-4 font-sans">
    <h1 className="text-2xl font-semibold font-mono">
      <Link to="/">Food-Explorer</Link>
    </h1>
    <div>
      <Link
        to="/cart"
        className="text-lg font-semibold flex justify-center items-center space-x-1.5 p-1.5"
      >
        Cart <IoCart size={20} />
      </Link>
    </div>
  </nav>
);

export default Navbar;
