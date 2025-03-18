import { Link } from "react-router-dom";
import logo from "../assets/images/zakir.png";
import classes from "../Styles/Nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Zakir" />
            <h3>Learn with Zakir</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
