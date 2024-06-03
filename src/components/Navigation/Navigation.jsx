import React, { useState } from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={style.burgerMenuButton} onClick={toggleMenu}>
                <RxHamburgerMenu />
            </button>
            <nav className={`${style.wrapperNavigation} ${isOpen ? style.open : ""}`}>
                {isLoggedIn ? (
                    <>
                        <UserMenu />
                        <ul className={style.listNav}>
                            <li className={style.itemList}>
                                <NavLink to="/" className={style.linkNav}>
                                    <div className={style.contentLink}>
                                        <FaHome className={style.iconNav} />
                                        <span>Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={style.itemList}>
                                <NavLink to="/contacts" className={style.linkNav}>
                                    <div className={style.contentLink}>
                                        <RiContactsFill className={style.iconNav} />
                                        <span>Contacts</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`${style.itemList} ${style.itemVisibility}`}>
                                <NavLink to="/register" className={style.linkNav}>
                                    <div className={style.contentLink}>
                                        <SiGnuprivacyguard className={style.iconNav} />
                                        <span>Register</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`${style.itemList} ${style.itemVisibility}`}>
                                <NavLink to="/password" className={style.linkNav}>
                                    <div className={style.contentLink}>
                                        <SiGnuprivacyguard className={style.iconNav} />
                                        <span>Forgot Password</span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </>
                ) : (
                    <ul className={style.listNav}>
                        <li className={style.itemList}>
                            <NavLink to="/" className={style.linkNav}>
                                <div className={style.contentLink}>
                                    <FaHome className={style.iconNav} />
                                    <span>Home</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={style.itemList}>
                            <NavLink to="/login" className={style.linkNav}>
                                <div className={style.contentLink}>
                                    <CiLogin className={style.iconNav} />
                                    <span>Login</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navigation;
