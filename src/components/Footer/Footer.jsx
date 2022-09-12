import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer-bcontainer">
      <div className="footer-container">
        <div className="footer-c-links">

        </div>
        <div className="foooter-c-info">
          <span>© 2022 Nahuel Genchi</span>
          <span>Pokémon data provided by <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokéAPI</a>.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;