'use client'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <h2>Repostería Claudia Patricia</h2>
      </nav>

      <section className="section hero">
        <h1>Pastelería Claudia Patricia</h1>
        <p style={{ position: 'relative', zIndex: 2, fontSize: '20px' }}>Dulzura en cada detalle</p>
      </section>

      <section className="section segunda">
        <section className="section segunda">
  <h2 className="titulo-seccion"></h2>
  
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

      </section>

      {/* Botones Flotantes */}
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

