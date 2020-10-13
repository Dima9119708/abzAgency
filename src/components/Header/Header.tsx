import React from "react";
import logo from '../../assets/img/logo.svg'
import menuBurger from '../../assets/img/menu icon.svg'

export const Header : React.FC = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__logo">
                        <a className="header__logo-link" href="/">
                            <img src={logo} alt="logoTest"/>
                        </a>
                    </div>

                    <menu className="header__menu">
                        <a className="header__menu-item" href="/">About me </a>
                        <a className="header__menu-item" href="/">Relationships</a>
                        <a className="header__menu-item" href="/">Requirements</a>
                        <a className="header__menu-item" href="/">Users</a>
                        <a className="header__menu-item" href="/">Sign Up </a>
                    </menu>

                    <div className="header__menu-burger">
                        <img src={menuBurger}/>
                    </div>

                </div>



            </div>
        </header>
    )
}