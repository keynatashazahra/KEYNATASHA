import React from "react";
import Profile from '../asset/bg.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                    Events
                </h2>

                <div className="flex flex-col items-center mb-12">
                    <img src={`${Profile}`} alt="Profile Picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-gray-600 mb-2">Website Seni</p>
                    <p className="text-xl text-gray-700 font-semibold">One of the best art</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Event this week</h3>
                        <p className="text-gray-700 mb-2">
                            Tempat  : Taman Indonesia Kaya
                        </p>
                        <p className="text-gray-700 mb-2">
                            Tanggal : 27 October 2024
                        </p>
                        <p className="text-gray-700 mb-2">
                        Waktu   : 07.00-selesai
                        </p>
                        

                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Event Tari Tradisional</h3>
                        <p className="text-gray-700 mb-2">
                            Tempat  : Balaikota
                        </p>
                        <p className="text-gray-700 mb-2">
                            Tanggal : 27 October 2024
                        </p>
                        <p className="text-gray-700 mb-2">
                        Waktu   : 16.00-selesai
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Annoucement</h3>
                        <p className="font-bold text-yellow-700 mb-4">
                            PERINGATAN HARI SENI SEDUNIA
                        </p>
                        <p className="text-gray-600 mb-4">
                            15 April 2024 diadakan festival seni di Simpang 5
                        </p>

                    </div>
                </div>
                <p className="text-lg text-gray-600 mt-8">
                    let's join with us!
                </p>
            </div>
        </section>
    )
}

export default About;
