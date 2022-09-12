import { LinkIcon } from "../index";

import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer-bcontainer">
      <div className="footer-container">
        <div className="footer-c-links">
          <LinkIcon link="https://github.com/NahuelGenchi" icon="logo-github"/>
          <LinkIcon link="https://www.linkedin.com/in/nahuel-genchi" icon="logo-linkedin"/>
          <LinkIcon link="mailto:nahuelgenchi@gmail.com" icon="mail"/>
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