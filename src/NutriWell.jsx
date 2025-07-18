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
import acelga from './assets/acelga.svg';



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
      <nav className={`flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-sm ${isScrolled ? "scale-95" : "scale-100"} transition-transform duration-300 sticky top-0 z-10`}>
        <div className="flex items-center gap-2">
          <span className="text-green-600">🍃</span>
          <span className="text-2xl font-bold text-green-700 font-raleway">NutriWell</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-green-600">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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


      {/* Hero */}
      <section id="inicio" className="relative flex flex-col md:flex-row items-start justify-center px-6 py-20 bg-gradient-to-r from-green-100 via-white to-green-100 overflow-hidden">
        <img src={hoja} alt="decoración hoja" className="absolute bottom-0 right-0 w-20 md:w-48 opacity-30 pointer-events-none z-0" />
        <img src={hoja} alt="decoración hoja" className="absolute top-0 left-0 w-16 md:w-32 opacity-30 pointer-events-none z-0" />
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


      {/* Sobre mí */}
      <section id="sobre-mi" className="relative px-6 py-20 bg-white overflow-hidden">
  {/* Acelgas decorativas grandes detrás del texto */}
  <img src={acelga} alt="decoración acelga izquierda" 
       className="absolute top-[100px] left-[-60px] w-64 opacity-10 z-0 pointer-events-none" />
  <img src={acelga} alt="decoración acelga derecha" 
       className="absolute bottom-10 right-[-40px] w-64 opacity-10 z-0 pointer-events-none rotate-[12deg]" />

  {/* Contenido principal */}
  <div className="relative z-10">
    <h2 className="font-raleway text-2xl md:text-3xl font-bold text-center mb-8">Sobre mí</h2>
    <div className="max-w-3xl mx-auto text-justify text-base md:text-lg leading-relaxed columns-1 md:columns-2 gap-10">
      <p>
        Con más de 10 años de experiencia, mi pasión es guiar a mis pacientes hacia un estilo de vida saludable y sostenible.
        Estoy especializada en nutrición deportiva y trastornos alimentarios.
      </p>
    </div>
  </div>
</section>

        {/* Servicios */}
      <section id="servicios" className="px-6 py-12 bg-gray-50">
        <h2 className="font-raleway text-2xl md:text-3xl font-bold text-center mb-8">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto font-raleway">
          {[
            { title: "Atención Personalizada", desc: "Planes adaptados a tus necesidades y objetivos.", icon: <FaUserShield className="text-2xl text-green-600" /> },
            { title: "Evaluación y Métricas Corporales", desc: "Análisis completo de tu composición corporal.", icon: <FaChartBar className="text-2xl text-green-600" /> },
            { title: "Creación de Planes de Alimentación", desc: "Dietas equilibradas y fáciles de seguir.", icon: <FaUtensils className="text-2xl text-green-600" /> },
            { title: "Seguimiento de Casos", desc: "Acompañamiento semanal para asegurar tu progreso.", icon: <FaChartLine className="text-2xl text-green-600" /> },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition">
              <div className="flex items-center gap-4 mb-2">{s.icon}<h3 className="font-raleway font-semibold text-green-800">{s.title}</h3></div>
              <p className="text-sm md:text-base text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="px-6 py-12 bg-white">
        <h2 className="font-raleway text-2xl md:text-3xl font-bold text-center mb-8">Testimonios</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { name: "Sofía Martínez", text: "Laura me ayudó a cambiar mis hábitos alimenticios y a sentirme mejor conmigo misma.", stars: 5 },
            { name: "Carla Gómez", text: "Excelente profesional, muy cercana y siempre disponible para resolver dudas.", stars: 5 },
            { name: "Lucía Ríos", text: "Gracias a su acompañamiento pude alcanzar mis metas sin pasar hambre ni estrés.", stars: 5 }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">{t.text}</p>
              <div className="space-y-2">
                <p className="font-semibold text-sm text-green-800">{t.name}</p>
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, j) => <FaStar key={j} className="text-yellow-400" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-gradient-to-r from-green-50 via-white to-green-50 px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-raleway">Estás a un paso de tu mejor versión</h2>
        <p className="mb-6">Reservá tu consulta ahora.</p>
        <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">Solicitar consulta</button>
      </section>

      {/* Footer */}
      <footer className="relative bg-white px-6 py-8 text-center text-sm text-gray-600 border-t font-lato">
        <img src={fruta1} alt="decoración fruta" className="absolute -bottom-6 left-0 w-16 md:w-32 opacity-30 pointer-events-none" />
        <img src={fruta2} alt="decoración fruta" className="absolute -bottom-6 right-0 w-16 md:w-32 opacity-30 pointer-events-none" />
        <p className="mb-2">¿Listo para transformar tu alimentación?</p>
        <a href="#" className="inline-block mb-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded shadow-md hover:shadow-lg">Reservá tu consulta</a>
        <div>2025 NutriWell. Todos los derechos reservados.</div>
      </footer>

      {/* WhatsApp */}
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
