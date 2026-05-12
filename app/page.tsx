'use client'
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [imagenActiva, setImagenActiva] = useState<string | null>(null);
  return (
    <main>
      <nav className="nav">
        <h2>Repostería Claudia Patricia</h2>
      </nav>

      <section className="hero">
        <h1>Pastelería Claudia Patricia</h1>
        <p className="hero-subtitulo">Dulzura en cada detalle</p>
      </section>

      <section className="segunda">
        <h2 className="titulo-seccion">Nuestros Productos</h2>
        <div className="contenedor-cortina">
          <div className="columna-postre">
            <div className="contenido-postre"><h3>Tortas Especiales</h3></div>
          </div>
          <div className="columna-postre">
            <div className="contenido-postre"><h3>Postres Fríos</h3></div>
          </div>
          <div className="columna-postre">
            <div className="contenido-postre"><h3>Galletas Caseras</h3></div>
          </div>
          <div className="columna-postre">
            <div className="contenido-postre"><h3>Cupcakes Decorados</h3></div>
          </div>
        </div>
      </section>
      
      <section className="seccion-galeria">
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

      <section className="seccion-contacto">
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
