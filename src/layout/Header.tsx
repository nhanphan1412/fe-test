import Logo from "../../public/logo.png";
import Navbar from "../components/Navbar";

function Header() {
  return (
    <header className="header">
      <a href="#" className="text-white text-decoration-none">
        <img src={Logo} alt="STOVE" />
        <span className="ml-1 text-lg">Nhan Phan</span>
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
