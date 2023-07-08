import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <div className="footer">
          <div className="foot.logo">
            <img src="../../../../logo.png" alt="" />
          </div>
        </div>
        <div className="footer">
          <h2>Contacto</h2>
          <a className="foot" target="_blank">
            <img src="../../../../whatsapp.png" alt="Whatsapp" />
            Whatsapp
          </a>
          <a className="foot">
            <img src=".../../../../telephone.png" alt="" />
            29018499
          </a>
          <a className="foot">
            <img src="../../../../smartphone.png" alt="" />
            094568209
          </a>
        </div>
        <div className="footer">
          <h2>Redes Sociales</h2>
          <a className="foot" target="_blank">
            "" ""
            <img src="../../../../instagram.png" alt="Instagram" />
            Instagram
          </a>
          <a className="foot" target="_blank">
            <img src="../../../../facebook.png" alt="Facebook" />
            Facebook
          </a>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>
          Todos los derechos reservados © 2023 <b>ArticStore</b>
        </p>
      </div>
    </>
  );
};

export default Footer;
