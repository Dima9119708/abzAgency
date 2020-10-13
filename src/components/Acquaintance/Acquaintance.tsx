import React from "react";
import imgLayer10 from '../../assets/img/man-laptop-v1.svg'

export const Acquaintance : React.FC = () => {

    return (
        <div className="acquaintance">
            <div className="container">
                <h2 className="title">Let's get acquainted</h2>
                <div className="acquaintance__inner">
                    <div className="acquaintance__img">
                        <img src={imgLayer10} />
                    </div>
                    <div className="acquaintance__dist">
                        <h3 className="acquaintance__dist-title">
                            I am cool frontend developer
                        </h3>
                        <div className="acquaintance__dist-text">
                            <p className="acquaintance__dist-text-p">
                                We will evaluate how clean your approach to writing CSS and Javascript code is.
                                You can use any CSS and Javascript 3rd party libraries without any restriction.
                            </p>

                            <p className="acquaintance__dist-text-p">
                                If 3rd party css/javascript libraries are added to the project via
                                bower/npm/yarn you will get bonus points.
                                If you use any task runner (gulp/webpack) you will get bonus points as well.
                                Slice service directory page P​SD mockup​ into HTML5/CSS3.
                            </p>

                        </div>
                        <div className="textAlignCenter">
                            <button className="acquaintance__link" type="button">Sing up now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}