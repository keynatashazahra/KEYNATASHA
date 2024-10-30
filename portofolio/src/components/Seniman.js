import React from "react";
import leo1 from '../asset/leo1.jpg';
import andy1 from '../asset/andy1.jpg';
import claude1 from '../asset/claude1.jpg';
import frida1 from '../asset/frida1.jpg';
import pablo1 from '../asset/pablo1.jpg';
import vincent1 from '../asset/vincent1.jpg';



const Seniman =() => {
return (
    <section id="seniman" className="py-20 bg-white">
        <div className="continer mx-auto text-center">
            <h2 className="text-rose-800 text-2xl font-bold mb-8">SENIMAN</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-violet-200 p-4 ml-4 rounded">
        <img src={leo1} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-sky-600 text-2xl font-bold mb-2">Leonardo da Vinci (1452–1519)
        </h3>
        <p className="font-semibold text-gray-700">Karya terkenal: Mona Lisa, The Last Supper
 </p>
 <p className="text-gray-700">
Seorang pelukis, pematung, ilmuwan, dan penemu dari era Renaisans. Da Vinci dikenal karena teknik realistisnya dan inovasi dalam penggunaan cahaya dan bayangan.
 </p>
</div>


    <div className="bg-red-200 p-4  rounded">
        <img src={andy1} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-yellow-700 text-2xl font-bold mb-2">Andy Warhol (1928–1987)
        </h3>
        <p className="font-semibold text-gray-700">Karya terkenal: Marilyn Diptych, Campbell's Soup Cans

</p>
<p className="text-gray-700">
Salah satu tokoh utama aliran Pop Art, Warhol terkenal karena mengangkat budaya pop dan benda sehari-hari sebagai objek seni, serta memadukan seni dan komersialisme.
</p>
</div>


    <div className="bg-green-200 p-4 mr-4 rounded">
        <img src={claude1} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-sky-300 text-2xl font-bold mb-2">Claude Monet (1840–1926)
        </h3>
        <p className="font-semibold text-gray-700">Karya terkenal: Impression, Sunrise, Water Lilies
</p>
<p className="text-gray-700">
Pelukis Prancis yang menjadi pelopor aliran Impresionisme. Monet dikenal karena penggunaan warna yang cemerlang dan teknik kuas yang menciptakan kesan gerakan.
</p>
</div>

<div className="bg-yellow-100 p-4 ml-4 rounded">
        <img src={frida1} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-yellow-900 text-2xl font-bold mb-2">Frida Kahlo (1907–1954)</h3>
        <p className="font-semibold text-gray-700">Karya terkenal: The Two Fridas, Self-Portrait with Thorn Necklace and Hummingbird

</p>
<p className="text-gray-700">
Seniman Meksiko yang terkenal dengan lukisan-lukisan potret diri yang ekspresif dan emosional, sering menggambarkan perjuangan pribadinya dan identitas nasional Meksiko.
</p>
</div>
<div className="bg-sky-200 p-4 rounded">
        <img src={pablo1} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-violet-300 text-2xl font-bold mb-2">Pablo Picasso (1881–1973)
        </h3>
        <p className="font-semibold text-gray-700">Karya terkenal: Guernica, Les Demoiselles d'Avignon
</p>
<p className="text-gray-700">
Salah satu pelopor aliran Kubisme, Picasso mengubah cara dunia melihat bentuk dan perspektif dalam seni. Ia bereksperimen dengan berbagai gaya sepanjang hidupnya.
</p>
</div>

<div className="bg-rose-300 p-4 mr-4 rounded">
        <img src={vincent1} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className=" text-orange-700 text-2xl font-bold mb-2">Vincent van Gogh (1853–1890)
        </h3>
        <p className="font-semibold text-gray-700">Karya terkenal: Starry Night, Sunflowers
        </p>
        <p className="text-gray-700">
        Seniman Belanda yang dikenal dengan gaya lukisan ekspresif dan warna-warna cerahnya. Karyanya banyak terinspirasi dari alam dan kehidupan sehari-hari, dengan sapuan kuas yang penuh emosi.
        </p>
</div>



</div>
     </div>
    </section>
)
}
export default Seniman;