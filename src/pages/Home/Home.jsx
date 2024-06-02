import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import { CgHello } from "react-icons/cg";

const Home = () => {
  return (
    <section className={style.section}>
      <h1 className={style.titleHome}>Welcome to Phonebook!</h1>
      <div>
        <h3 className={style.titleHome}>Manage your contacts easily</h3>
        <p className={style.paragraph}>Phonebook is the perfect solution to organize your personal and professional contacts. With an intuitive interface and advanced features, Phonebook allows you to add and delete contacts quickly and efficiently.</p>
      </div>
      <div>
        <h4 className={style.titleHome}>Characteristics:</h4>
        <ul className={style.listItems}>
          <li className={style.items}>
            <p className={style.paragraph}>Quickly add contacts :</p>
            <p className={style.paragraph}>Quickly enter the name and phone number of your contacts.</p>
          </li>
          <li className={style.items}>
            <p className={style.paragraph}>Secure deletion :</p>
            <p className={style.paragraph}>Remove unwanted contacts with a single click.</p>
          </li>
          <li className={style.items}>
            <p className={style.paragraph}>Security :</p>
            <p className={style.paragraph}>All your data is protected and accessible only with a genuine account.</p>
          </li>
        </ul>
      </div>
      {/* <div>
        <h4 className={style.titleHome}>How to get started:</h4>
        <ul className={style.listNbr}>
          <li className={style.items}>
            <p className={style.paragraph}>Register :</p>
            <p className={style.paragraph}>Create a new account to start using Phonebook.</p>
          </li>
          <li className={style.items}>
            <p className={style.paragraph}>Sign in :</p> 
            <p className={style.paragraph}>Sign in with your existing account to access your contacts.</p>
          </li>
        </ul>
      </div> */}
      <div>
        <h3 className={style.titleHome}>Login or Register to get started!</h3>
        <div className={style.wrapperUser}>
          <div className={style.linkUser}>
            <p className={style.paragraph}>Already have an account?</p>
            <NavLink to="/login" className={style.link}>Connect here</NavLink>
          </div>
          <div className={style.linkUser}>
            <p className={style.paragraph}>Are you new here?</p>
            <NavLink to="/register" className={style.link}>Register now</NavLink>
          </div>
        </div>
      </div>
      {/* <div>
        <h3 className={style.titleHome}>About Phonebook</h3>
        <p className={style.paragraph}>Phonebook is an application created to simplify the management of contacts. Whether you have a personal or professional diary, Phonebook helps you keep all your important information in one place. With robust security features and a friendly interface, Phonebook is the ideal choice for anyone who wants to better organize their digital life.</p>
      </div> */}
      <p className={`${style.paragraph} ${style.prghAnim}`}>We are waiting for you to discover all the advantages of Phonebook! <CgHello  className={style.iconHello}/></p>
    </section>
  );
};

export default Home;
