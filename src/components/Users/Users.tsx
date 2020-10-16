import React from "react";
import defaultUserFoto from '../../assets/img/photo-cover.svg'
import {useDispatch} from "react-redux";
import {SET_USERS_OFFSET_TOP_ACTION} from "../../redux/action";
import {EclipseTooltip} from "../EclipseTooltip/EclipseTooltip";

export const Users : React.FC = () => {

    const dispatch = useDispatch()

    const $usersDiv = React.useRef(null)

    React.useEffect(() => {

        const $divUsers = $usersDiv.current! as HTMLDivElement
        const offsetTop = $divUsers.offsetTop
        dispatch(SET_USERS_OFFSET_TOP_ACTION(offsetTop))

    }, [$usersDiv])

    return (
        <section ref={$usersDiv} className="users boxPadding">
            <div className="container">
                <div className="users__title">
                    <h2 className="title">Our cheerful users</h2>
                    <p className="users__subtitle-text">Attention! Sorting users by registration date</p>
                </div>

                <div className="users__inner">

                    <div className="user__card">
                        <div className="user__card-img">
                            <img className="image" src={defaultUserFoto} alt={'defaultUserFoto'}/>
                        </div>
                        <div className="user__card-name">Maximillian</div>

                        <EclipseTooltip >
                             <div className="user__card-position">
                                 Leading specialist of the Control Department
                             </div>
                        </EclipseTooltip>

                        <div className="user__card-email">elisabet.front@gmail.com</div>
                        <div className="user__card-phone">+380 50 678 03 24</div>
                    </div>

                    <div className="user__card">
                        <div className="user__card-img">
                            <img className="image" src={defaultUserFoto} alt={'defaultUserFoto'}/>
                        </div>
                        <div className="user__card-name">Adolph Blaine Charles David Earl Matthew Matthew</div>
                        <div className="user__card-position">Contextual advertising specialist</div>

                        <EclipseTooltip>
                            <div className="user__card-email">adolph.blainecharles@gmail.com</div>
                        </EclipseTooltip>

                        <div className="user__card-phone">+380 50 678 03 24</div>
                    </div>

                    <div className="user__card">
                        <div className="user__card-img">
                            <img className="image" src={defaultUserFoto} alt={'defaultUserFoto'}/>
                        </div>
                        <div className="user__card-name">Adolph Blaine Charles David Earl Matthew Matthew</div>
                        <div className="user__card-position">Contextual advertising specialist</div>
                        <div className="user__card-email">adolph.blainecharles@gmail.com</div>
                        <div className="user__card-phone">+380 50 678 03 24</div>
                    </div>

                    <div className="user__card">
                        <div className="user__card-img">
                            <img className="image" src={defaultUserFoto} alt={'defaultUserFoto'}/>
                        </div>
                        <div className="user__card-name">Adolph Blaine Charles David Earl Matthew Matthew</div>
                        <div className="user__card-position">Contextual advertising specialist</div>
                        <div className="user__card-email">adolph.blainecharles@gmail.com</div>
                        <div className="user__card-phone">+380 50 678 03 24</div>
                    </div>

                    <div className="user__card">
                        <div className="user__card-img">
                            <img className="image" src={defaultUserFoto} alt={'defaultUserFoto'}/>
                        </div>
                        <div className="user__card-name">Adolph Blaine Charles David Earl Matthew Matthew</div>
                        <div className="user__card-position">Contextual advertising specialist</div>
                        <div className="user__card-email">adolph.blainecharles@gmail.com</div>
                        <div className="user__card-phone">+380 50 678 03 24</div>
                    </div>

                    <div className="user__card">
                        <div className="user__card-img">
                            <img className="image" src={defaultUserFoto} alt={'defaultUserFoto'}/>
                        </div>
                        <div className="user__card-name">Adolph Blaine Charles David Earl Matthew Matthew</div>
                        <div className="user__card-position">Contextual advertising specialist</div>
                        <div className="user__card-email">adolph.blainecharles@gmail.com</div>
                        <div className="user__card-phone">+380 50 678 03 24</div>
                    </div>

                </div>

                <div className="users__showMore">
                    <button className="sing__button">Show more</button>
                </div>

            </div>
        </section>
    )
}