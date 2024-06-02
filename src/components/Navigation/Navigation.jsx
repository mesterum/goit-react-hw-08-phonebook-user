import React from "react";
import style from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";


const Navigation = () => {
    return(
        <nav className={style.wrapperNavigation}>
      <ul className={style.listNav}>
        <li className={style.itemList}>
            <NavLink to="/" className={style.linkNav}>
                <div className={style.contentLink}>
                <FaHome className={style.iconNav}/>
                <span>Home</span>
                </div>
            
            </NavLink>
            </li>
        <li className={style.itemList}>
            <NavLink to="/login" className={style.linkNav}>
                <div className={style.contentLink}>
                    <CiLogin className={style.iconNav}/>
                    <span> Login</span>
            </div>
            </NavLink>
            </li>
        <li className={`${style.itemList} ${style.itemVisibility}`}>
            <NavLink to="/register" className={style.linkNav}>
                <div className={style.contentLink}>
                <SiGnuprivacyguard className={style.iconNav}/>
                <span>Register</span>
                </div>
            </NavLink>
            </li>
            <li className={`${style.itemList} ${style.itemVisibility}`}>
            <NavLink to="/password" className={style.linkNav}>
                <div className={style.contentLink}>
                <SiGnuprivacyguard className={style.iconNav}/>
                <span>Forgot Password</span>
                </div>
            </NavLink>

            </li>
      </ul>
    </nav>
    )
}

export default Navigation;