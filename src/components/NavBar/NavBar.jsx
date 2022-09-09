import CartWidget from "../NavBar/CartWidget/CartWidget";
import HomeWidget from "./HomeWidget/HomeWidget";
import UserWidget from "./UserWidget/UserIcon";
import ContactIcon from "./ContactWidget/ContactIcon";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="row-span-1 col-span-2 font-title-hammer">
      <ul className="flex justify-center">
        <li className="mx-3 transition-all ease-in-out delay-150 hover:tracking-widest ">
          <Link to={'/'} className="text-amber-400 hover:underline-offset-4 hover:decoration-amber-100">
            <HomeWidget />
            HOME
          </Link>
        </li>
        <li className="mx-3 transition-all ease-in-out delay-150 hover:tracking-widest ">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UserWidget />
            ABOUT
          </a>
        </li>
        <li className="mx-3 transition-all ease-in-out delay-150 hover:tracking-widest">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon />
            CONTACT
          </a>
        </li>
        <li className="mx-3 transition-all ease-in-out delay-150 hover:tracking-widest">
          <Link to={'/shop'} className="text-amber-400 transition-all ease-in-out delay-150 hover:tracking-widest">
          <CartWidget />
            SHOP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
// AMBER 400 , 500 , 800
// STONE 800
