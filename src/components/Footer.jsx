import "./Footer.css";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 MaliSafi. All rights reserved.</p>
      <div className="social-media">
        <a
          href="https://www.facebook.com/malisafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com/malisafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/malisafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}
