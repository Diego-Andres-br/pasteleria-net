'use client'
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [imagenActiva, setImagenActiva] = useState<string | null>(null);
  return (
    <main>
      <nav className="nav">
  <div className="nav-logo">
  <img src="/Images/logo.png" alt="Repostería Claudia Patricia" className="logo-img" />
  <div className="logo-texto">
    <span className="logo-principal">Repostería Claudia Patricia</span>
    
  </div>
</div>
  <ul className="nav-links">
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#galeria">Galería</a></li>
    <li><a href="#precios">Precios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>

  <section id="inicio" className="hero">
  <p className="hero-ciudad">Repostería Artesanal · Cartagena</p>
  <h1 className="hero-titulo">Claudia Patricia</h1>
  <p className="hero-subtitulo">Dulzura hecha con amor en cada detalle</p>
  <div className="hero-botones">
    <a href="#galeria" className="boton boton-principal">Ver Galería</a>
    <a href="https://wa.me/573045732744" target="_blank" rel="noopener noreferrer" className="boton boton-secundario">
      Hacer Pedido
    </a>
  </div>
</section>

<section className="segunda">
  <h2 className="titulo-seccion">Nuestros Productos</h2>
  <div className="contenedor-cortina">
    <div className="columna-postre">
      <div className="contenido-postre">
        <h3>Pudines</h3>
        <p className="producto-desc">Todos los sabores</p>
      </div>
    </div>
    <div className="columna-postre">
      <div className="contenido-postre">
        <h3>Postres</h3>
        <p className="producto-desc">Fríos y calientes</p>
      </div>
    </div>
    <div className="columna-postre">
      <div className="contenido-postre">
        <h3>Cupcakes</h3>
        <p className="producto-desc">Decorados a tu gusto</p>
      </div>
    </div>
  </div>
</section>
      
      <section id="galeria" className="seccion-galeria">
  <h2 className="titulo-seccion">Nuestra Galería</h2>
  <div className="galeria-grid">
    {[1,2,3,4,5,6,7,8,9].map((n) => (
      <div key={n} className="galeria-item" onClick={() => setImagenActiva(`/Images/galeria${n}.jpg`)}>
        <img src={`/Images/galeria${n}.jpg`} alt={`Postre ${n}`} />
        <div className="galeria-overlay"><span>🔍</span></div>
      </div>
    ))}
  </div>

  {imagenActiva && (
    <div className="galeria-modal" onClick={() => setImagenActiva(null)}>
      <img src={imagenActiva} alt="Foto ampliada" />
      <button className="modal-cerrar" onClick={() => setImagenActiva(null)}>✕</button>
    </div>
  )}
</section>

      <section id="contacto" className="seccion-contacto">
        <h2 className="titulo-seccion">¿Tienes un antojo?</h2>
        <p className="contacto-texto">Escríbenos y con gusto te ayudamos con tu pedido</p>
        <a href="https://wa.me/573045732744" target="_blank" rel="noopener noreferrer" className="boton">
          📲 Pedir por WhatsApp
        </a>
      </section>

      <a href="https://www.facebook.com/share/1HXseZ7jnf/" target="_blank" rel="noopener noreferrer" className="float facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/claudia128051?igsh=MTRhcGhzdmp0YjByNw==" target="_blank" rel="noopener noreferrer" className="float instagram">
        <FaInstagram />
      </a>
      <a href="https://wa.me/573045732744" target="_blank" rel="noopener noreferrer" className="float whatsapp">
        <FaWhatsapp />
      </a>
    </main>
  );
}
