import escudo from "../img/escudo-cucei.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src={escudo} alt="Escudo de CUCEI" className="footer-escudo" />
      <div className="footer-info">
        <p>
          <strong>Integrantes:</strong> Amaya Itzel Reyes Nuñez, Sofia Abigail
          Aranda Diaz
        </p>
        <p>
          <strong>Profesor:</strong> Zeus Emanuel Gutiérrez Cobián
        </p>
        <p>
          <strong>Materia:</strong> Desarrollo de Aplicaciones Web en la Nube y
          Móviles
        </p>
        <p>
          <strong>Calendario escolar:</strong> 2026B
        </p>
        <p>
          <strong>Mes y año:</strong> Noviembre 2026
        </p>
        <p>
          <strong>Institución:</strong> CUCEI – Universidad de Guadalajara
        </p>
        <p className="footer-tmdb">
          Este producto usa la API de TMDB, pero no está avalado ni certificado
          por TMDB.
        </p>
      </div>
    </footer>
  );
}

export default Footer;