import React from "react";

const Navbar = () => {
    return(
<nav className="bg-rose-950 p-4">
    <div className="container mx-auto flex justify-between items-center">
<h1 className="text-yellow-400 text-3xl font-bold">Artbehance</h1>
<div>
    <a href="#about" className="text-pink-300 hover:text-white mx-4 transition duration-300">Events</a>
    <a href="#seniman" className="text-pink-300 hover:text-white mx-4 transition duration-300">Seniman</a>
    <a href="#projects" className="text-pink-300 hover:text-white mx-4 transition duration-300">Gallery</a>
    <a href="#contact" className="text-pink-300 hover:text-white mx-4 transition duration-300">Contact</a>


</div>
    </div>
</nav>
    )
}
export default Navbar;