import React from "react";

const Contact = () => {
    return (
<section id="contact" className="py-20 bg-gray-100">
<div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-8 text-gray-800"></h2>
    <p className="text-xl mb-4 text-gray-600">
        Feel free to leave me a message
     </p>
     <a href="mailto:sindhu.educourse@gmail.com" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-400">
        Send Mail
     </a>
    </div>
</section>
    )
}

export default Contact;