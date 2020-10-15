import React from "react";
import logo from '../../assets/img/logo.svg'
import menuBurger from '../../assets/img/menu icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../redux/reducer";
import {SET_MOBILE_MENU_ACTION} from "../../redux/action";

export const Header : React.FC = () => {

    const { flagMenu, formaOffsetTop, usersOffsetTop } = useSelector((state : InitialStateType) => state)
    const dispatch = useDispatch()

    const handleClickMenu = () => {
        dispatch(SET_MOBILE_MENU_ACTION(flagMenu ? false : true))
    }

    const handleClickScrollToForm = () => {
        window.scrollTo({top: formaOffsetTop, behavior: "smooth"})
    }

    const handleClickScrollToUsers = () => {
        window.scrollTo({top: usersOffsetTop, behavior: "smooth"})
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__logo">
                        <a className="header__logo-link" href={'/'}>
                            <img src={logo} alt={'testFrontLogo'} />
                        </a>
                    </div>

                    <menu className="header__menu">
                        <a className="header__menu-item" href="/">About me </a>
                        <a className="header__menu-item" href="/">Relationships</a>
                        <a className="header__menu-item" href="/">Requirements</a>
                        <button
                            onClick={handleClickScrollToUsers}
                            className="header__menu-item"
                        >Users
                        </button>
                        <button
                            onClick={handleClickScrollToForm}
                            type="button"
                            className="header__menu-item" >
                            Sign Up
                        </button>
                    </menu>

                    <div onClick={handleClickMenu}
                        className="header__menu-burger">
                        <img src={menuBurger}/>
                    </div>

                </div>

            </div>
        </header>
    )
}