import React, {useState} from 'react';
import './assets/scss/app.scss'
import {Header} from "./components/Header/Header";
import {Intro} from "./components/Intro/Intro";
import {Acquaintance} from "./components/Acquaintance/Acquaintance";
import {Users} from "./components/Users/Users";
import {Forma} from "./components/Forma/Forma";
import {Footer} from "./components/Footer/Footer";
import {MobileMenu} from "./components/MobileMenu/MobileMenu";
import {useDispatch} from "react-redux";
import {getFormRadioDATA, getToken, getUsers} from "./redux/actionAsync";

function App() {

  const dispatch = useDispatch()
  dispatch(getFormRadioDATA())
  dispatch(getToken())
  dispatch(getUsers())

  return (
    <>
        <Header />

        <div className="container__wide mg-top">
            <Intro />

            <main>
                <Acquaintance />
                <Users />
                <Forma />
            </main>

            <Footer />
        </div>

        <MobileMenu />
    </>
  );
}

export default App;
