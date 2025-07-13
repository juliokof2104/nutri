import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaUserShield,
  FaChartBar,
  FaUtensils,
  FaChartLine,
  FaBars,
  FaTimes,
  FaStar
} from "react-icons/fa";
import lauraImage from './laura-garcia.webp';
import hoja from './assets/hojas.svg';
import fruta1 from './assets/fruta1.svg';
import fruta2 from './assets/fruta2.svg';

export default function NutriWell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-lato text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className={`flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-sm ${isScrolled ? "transform scale-95" : "transform scale-100"} transition-transform duration-300 sticky top-0 z-10`}>
        <div className="flex items-center gap-2">
          <span className="text-green-600">🍃</span>
          <span className="text-2xl font-bold text-green-700 font-raleway">NutriWell</span>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-green-600">
          <div className="flex items-center gap-2">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            <span className="text-sm">Menú</span>
          </div>
        </button>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-green-600">Inicio</a></li>
          <li><a href="#sobre-mi" className="hover:text-green-600">Sobre mí</a></li>
          <li><a href="#servicios" className="hover:text-green-600">Servicios</a></li>
          <li><a href="#testimonios" className="hover:text-green-600">Testimonios</a></li>
          <li><a href="#contacto" className="hover:text-green-600">Contacto</a></li>
        </ul>

        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4`}>
          <ul className="space-y-4 text-sm font-medium">
            {["inicio", "sobre-mi", "servicios", "testimonios", "contacto"].map((id) => (
              <li key={id} onClick={() => setIsMenuOpen(false)}>
                <a href={`#${id}`} className="hover:text-green-600 block font-raleway capitalize">{id.replace("-", " ")}</a>
              </li>
            ))}
          </ul>
        </div>

        <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Solicitar Consulta</button>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative flex flex-col md:flex-row items-start justify-center px-6 py-20 bg-gradient-to-r from-green-100 via-white to-green-100 overflow-hidden">
        <img src={hoja} alt="decoración hoja" className="absolute bottom-0 right-0 w-24 md:w-48 opacity-30 pointer-events-none z-0" />
        <img src={hoja} alt="decoración hoja" className="absolute top-0 left-0 w-24 md:w-48 opacity-30 pointer-events-none z-0" />

        <div className="flex flex-col md:flex-row gap-12 z-10">
          <div className="relative w-64 h-96 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl">
            <img src={lauraImage} alt="Laura García" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="max-w-xl text-left mt-12">
            <h1 className="font-raleway text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text mb-4">Bienestar a tu alcance</h1>
            <p className="text-lg md:text-xl mb-6">Soy Laura García, nutricionista profesional. Te ayudaré a alcanzar tus metas de alimentación con planes personalizados y seguimiento continuo.</p>
            <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">Solicitar Consulta</button>
          </div>
        </div>
      </section>

      {/* ... (resto del código permanece igual) */}

      {/* Footer */}
      <footer className="relative bg-white px-6 py-8 text-center text-sm text-gray-600 border-t font-lato">
        <img src={fruta1} alt="decoración fruta" className="absolute -bottom-8 left-0 w-20 md:w-32 opacity-30 pointer-events-none" />
        <img src={fruta2} alt="decoración fruta" className="absolute -bottom-8 right-0 w-20 md:w-32 opacity-30 pointer-events-none" />
        <p className="mb-2">¿Listo para transformar tu alimentación?</p>
        <a href="#" className="inline-block mb-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded shadow-md hover:shadow-lg">Reservá tu consulta</a>
        <div>2025 NutriWell. Todos los derechos reservados.</div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5490000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
        aria-label="Chat en WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
