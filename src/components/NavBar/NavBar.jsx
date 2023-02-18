import { NavLink, Outlet } from "react-router-dom";
import items from './items.js';
import css from './NavBar.module.css';
const NavBar = ()=>{
    const element = items.map(({ id, text, link }) =>
        <li  className={css.link} key={id}>
            <NavLink className={css.navLink}to={link}>{text}</NavLink>
        </li>)
    return (
        <>
        <ul className={css.nav}>
            {element}
            </ul>
            <Outlet/>
        </>
        
    )
}
export default NavBar;