import React from "react";
import mozaik from '../asset/mozaik.jpg';
import orang from '../asset/orang.jpg';
import patung from '../asset/patung.jpg';
import kain from '../asset/kain.jpeg';
import bali from '../asset/bali.jpg';
import borobudur from '../asset/borobudur.jpg';
import wayang from '../asset/wayang.jpg';
import batik2 from '../asset/batik2.jpg';
import lukisan from '../asset/lukisan.jpeg';



const Gallery =() => {
return (
    <section id="projects" className="py-20 bg-white">
        <div className="continer mx-auto text-center">
            <h2 className="text-rose-800 text-2xl font-bold mb-8">OUR GALLERY</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-100 p-4 rounded">
        <img src={mozaik} alt="Samuel WAttimena" className="w-full h-48 object-cover ml-4 rounded"/>
        <h3 className="text-yellow-300 text-2xl font-bold mb-2">MOZAIK</h3>
        <p className="text-gray-700">Mozaik adalah karya seni rupa dua atau tiga dimensi yang menggunakan material seperti kaca, keramik, atau media lain yang dipotong-potong atau sudah berbentuk potongan kemudian disusun </p>
</div>


    <div className="bg-gray-100 p-4 rounded">
        <img src={orang} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-lime-300 text-2xl font-bold mb-2">REALISME</h3>
        <p className="text-gray-700">Realisme yaitu aliran seni yang bisa dikatakan bahwa lukisan realisme tergambar seakan begitu nyata dan tanpa ilusi di dalamnya.</p>
</div>


    <div className="bg-gray-100 p-4 rounded">
        <img src={patung} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-sky-300 text-2xl font-bold mb-2">PATUNG</h3>
        <p className="text-gray-700">Seni patung adalah salah satu cabang seni rupa yang menawarkan keindahan dan kedalaman melalui karya tiga dimensi</p>
</div>

<div className="bg-gray-100 p-4 rounded">
        <img src={kain} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-yellow-900 text-2xl font-bold mb-2">KAIN TENUN</h3>
        <p className="text-gray-700">Seni kali ini datang dari salah satu budaya di Indonesia yaitu kain tenun. Motifnya yang cantik dan terkesan mahal menggambarka sebuah seni yang tidak terhingga</p>
</div>
<div className="bg-gray-100 p-4 rounded">
        <img src={bali} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-violet-300 text-2xl font-bold mb-2">BARONG BALI</h3>
        <p className="text-gray-700">Barong ini juga merupakan seni yang datang dari Indonesia, tepatnya daerah Bali. Barong Bali adalah satu di antara begitu banyak ragam seni pertunjukan Bali.</p>
</div>

<div className="bg-gray-100 p-4 rounded">
        <img src={borobudur} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className=" text-orange-300 text-2xl font-bold mb-2">BOROBUDUR</h3>
        <p className="text-gray-700">Borobudur merupakan mahakarya seni rupa Buddha Indonesia, sebagai contoh puncak pencapaian keselarasan teknik arsitektur dan estetika seni rupa Buddha di Jawa. </p>
</div>

<div className="bg-gray-100 p-4 rounded">
        <img src={wayang} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-red-900 text-2xl font-bold mb-2">Wayang</h3>
        <p className="text-gray-700">Wayang merupakan seni pertunjukkan tradisional asli Indonesia yang berasal dan berkembang pesat di pulau Jawa dan Bali.</p>
</div>

<div className="bg-gray-100 p-4 rounded">
        <img src={batik2} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-green-400 text-2xl font-bold mb-2">BATIK</h3>
        <p className="text-gray-700">Motif yang ada pada kain batik sangat cantik, memiliki nilai seni dan keindahan yang tinggi </p>
</div>

<div className="bg-gray-100 p-4 rounded">
        <img src={lukisan} alt="Samuel WAttimena" className="w-full h-48 object-cover mb- rounded"/>
        <h3 className="text-pink-500 text-2xl font-bold mb-2">ABSTRAK</h3>
        <p className="text-gray-700">Seni abstrak tidak memiliki aturan yang ketat, sehingga seniman dapat bereksperimen dengan gaya dan teknik yang berbeda-beda. Dengan demikian, seniman dapat mengekspresikan diri secara lebih bebas dan kreatif.  </p>
</div>

</div>
     </div>
    </section>
)
}
export default Gallery;