import React from "react";
import logo from '../../assets/img/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../redux/reducer";
import {SET_MOBILE_MENU_ACTION} from "../../redux/action";

export const MobileMenu = () => {

    const { flagMenu,formaOffsetTop,usersOffsetTop } = useSelector((state: InitialStateType) => state)
    const dispatch = useDispatch()

    React.useEffect(() => {

        document.body.style.overflowY = flagMenu ? 'hidden' : ''

        const handleResizeWindow = () => {

            if (flagMenu) {
                dispatch(SET_MOBILE_MENU_ACTION( false))
                window.removeEventListener('resize', handleResizeWindow)
            }
        }

        window.addEventListener('resize', handleResizeWindow)

    }, [flagMenu])


    const handleClickMenu = () => {
        dispatch(SET_MOBILE_MENU_ACTION(flagMenu ? false : true))
    }

    const handleClickScrollToForm = () => {
        dispatch(SET_MOBILE_MENU_ACTION(false))
        window.scrollTo({top: formaOffsetTop, behavior: "smooth"})
    }

    const handleClickScrollToUsers = () => {
        dispatch(SET_MOBILE_MENU_ACTION(false))
        window.scrollTo({top: usersOffsetTop, behavior: "smooth"})
    }

    return (
        <>
            <div
                onClick={handleClickMenu}
                className="mobileMenu-overlay"
                style={{
                    opacity : flagMenu ? 1 : 0,
                    zIndex : flagMenu ? 999 : -50,
                    transition : 'opacity .3s ease'
                }}
            />


            <div
                className="mobileMenu"
                style={{
                    opacity : flagMenu ? 1 : 0,
                    zIndex : flagMenu ? 999 : -50,
                    transition : 'opacity .3s ease'
                }}
            >

                <div className="mobileMenu__logo">
                    <img src={logo} alt="logo"/>
                </div>

                <menu className="mobileMenu__menu">
                    <a className="mobileMenu__menu-link" href="/" >About me</a>
                    <a className="mobileMenu__menu-link" href="/" >Relationships</a>
                    <button
                        onClick={handleClickScrollToUsers}
                        className="mobileMenu__menu-link" type="button"
                    >
                        Users
                    </button>
                    <button
                        onClick={handleClickScrollToForm}
                        className="mobileMenu__menu-link" type="button"
                    >
                        Sign Up
                    </button>
                    <a className="mobileMenu__menu-link" href="/" >Terms and Conditions</a>
                </menu>

                <menu className="mobileMenu__menu">
                    <a className="mobileMenu__menu-link" href="/" >How it works</a>
                    <a className="mobileMenu__menu-link" href="/" >Partnership</a>
                    <a className="mobileMenu__menu-link" href="/" >Help</a>
                    <a className="mobileMenu__menu-link" href="/" >Leave testimonial</a>
                    <a className="mobileMenu__menu-link" href="/" >Contact us</a>
                </menu>

                <menu className="mobileMenu__menu">
                    <a className="mobileMenu__menu-link" href="/" >Articles</a>
                    <a className="mobileMenu__menu-link" href="/" >Our news</a>
                    <a className="mobileMenu__menu-link" href="/" >Testimonials</a>
                    <a className="mobileMenu__menu-link" href="/" >Licenses</a>
                    <a className="mobileMenu__menu-link" href="/" >Privacy Policy</a>
                </menu>

            </div>
       </>
    )
}