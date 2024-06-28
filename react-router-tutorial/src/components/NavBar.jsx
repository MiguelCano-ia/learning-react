import { NavLink } from "react-router-dom";
import './navbar.css';

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}  to='/'>Home</NavLink> {/*Navegación single Page, si isActive es true, cambia  el color del link en el que etamos*/}

        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
      </ul>
    </div>
  )
}
