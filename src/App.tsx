import React from 'react';
import './assets/scss/app.scss'
import {Header} from "./components/Header/Header";
import {Intro} from "./components/Intro/Intro";
import {Acquaintance} from "./components/Acquaintance/Acquaintance";
import {Users} from "./components/Users/Users";
import {Forma} from "./components/Forma/Forma";

function App() {
  return (
    <>
        <Header />

        <div className="container__wide mg-top">
            <Intro />
            <Acquaintance />
            <Users />
            <Forma />
        </div>
    </>
  );
}

export default App;
