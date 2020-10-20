import React from "react";
import {useSelector} from "react-redux";
import {InitialStateType} from "../../redux/reducer";
import {EclipseTooltip} from "../EclipseTooltip/EclipseTooltip";
import {ScrollToSection} from "../ScrollToSection/ScrollToSection";

export const Intro : React.FC = () => {

    const { formaDiv } = useSelector((state : InitialStateType) => state)

    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">

                    <EclipseTooltip>
                        <h1 className="title">
                            Test assignment for Frontend Developer position
                        </h1>
                    </EclipseTooltip>

                    <EclipseTooltip >
                        <p className="intro__text">
                            We kindly remind you that your test assignment should be submitted as a link
                            to github/bitbucket repository.
                            Please be patient, we consider and respond to every application that meets
                            minimum requirements. We look forward to your submission. Good luck!
                            The photo has to scale in the banner area on the different screens
                        </p>
                    </EclipseTooltip>

                    <ScrollToSection
                        div={formaDiv}
                        className={'sing__button'}
                    >
                        Sing up now
                    </ScrollToSection>
                </div>
            </div>
        </div>
    )
}