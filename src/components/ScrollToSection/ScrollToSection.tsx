import React from "react";
import {SET_MOBILE_MENU_ACTION} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../redux/reducer";

type PropsType = {
    children : string,
    div : HTMLDivElement | null
    className : string
}

export const ScrollToSection = ({ children, div, className } : PropsType ) => {

    const { flagMenu } = useSelector((state: InitialStateType) => state)
    const dispatch = useDispatch()

    const handleClickScroll = () => {
        if (flagMenu) {
            dispatch(SET_MOBILE_MENU_ACTION(false))
        }
        window.scrollTo({top: div!.offsetTop, behavior: "smooth"})
    }

    return <button
        type="button"
        className={className}
        onClick={handleClickScroll}
    >
        {children}
    </button>
}