import React from 'react';
import './assets/scss/app.scss'
import {Header} from "./components/Header/Header";
import {Intro} from "./components/Intro/Intro";
import {Acquaintance} from "./components/Acquaintance/Acquaintance";

function App() {
  return (
    <>
        <Header />

        <div className="container__wide mg-top">
            <Intro />
            <Acquaintance />
        </div>
    </>
  );
}

export default App;
