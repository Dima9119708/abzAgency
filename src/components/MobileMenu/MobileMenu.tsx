import React from "react";
import logo from '../../assets/img/logo.svg'

export const MobileMenu = () => {

    return (
        <>
            <div className="mobileMenu-overlay"></div>

            <div className="mobileMenu">

                <div className="mobileMenu__logo">
                    <img src={logo} alt="logo"/>
                </div>

                <menu className="mobileMenu__menu">
                    <a className="mobileMenu__menu-link" href="/" >About me</a>
                    <a className="mobileMenu__menu-link" href="/" >Relationships</a>
                    <a className="mobileMenu__menu-link" href="/" >Active item</a>
                    <a className="mobileMenu__menu-link" href="/" >Sign Up</a>
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