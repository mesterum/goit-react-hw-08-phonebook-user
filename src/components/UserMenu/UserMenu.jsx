import { useAuth } from "hooks";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import style from './UserMenu.module.css';
import { IoIosLogOut } from "react-icons/io";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={style.wrapper}>
            <p className={style.userName}>Welcome, <span className={style.name}>{user.name}</span></p>
            <button className={style.btnLogout} type="button" onClick={() => dispatch(logOut())}>
                <span>Log Out</span>
                <span><IoIosLogOut /></span>
            </button>
        </div>
    );
}

export default UserMenu;
