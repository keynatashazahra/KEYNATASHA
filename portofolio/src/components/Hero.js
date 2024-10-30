import React from "react";
import cover from '../asset/bg.jpg'

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${cover})` }}
        >
            <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-20x1 font-bold mb-4">WONDERFUL ART </h2>
                <p className="text-2x1 mb-8">ART IS THE ONE OF MOST WONDERFUL THINGS</p>
                <a href="#projects" className="bg-rose-800 hover:bg-rose-400  text-white font-bold py-2 px-6 rounded-full shadow-lg transition-300">
                    Show More
                </a>
            </div>
        </section>
    )
}

export default Hero;
