import React from "react";

export const Intro : React.FC = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h1 className="title">
                        Test assignment for Frontend Developer position
                    </h1>
                    <p className="intro__text">
                        We kindly remind you that your test assignment should be submitted as a link
                        to github/bitbucket repository.
                        Please be patient, we consider and respond to every application that meets
                        minimum requirements. We look forward to your submission. Good luck!
                        The photo has to scale in the banner area on the different screens
                    </p>
                    <button className="sing__button" type="button">Sing up now</button>
                </div>
            </div>
        </div>
    )
}