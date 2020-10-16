import React from "react";
import {SET_MOBILE_MENU_ACTION} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../redux/reducer";

type PropsType = {
    children : string,
    offsetTop : number
    className : string
}

export const ScrollToSection = ({ children, offsetTop, className } : PropsType ) => {

    const { flagMenu } = useSelector((state: InitialStateType) => state)
    const dispatch = useDispatch()

    const handleClickScroll = () => {
        if (flagMenu) {
            dispatch(SET_MOBILE_MENU_ACTION(false))
        }
        window.scrollTo({top: offsetTop, behavior: "smooth"})
    }

    return (<button
        type="button"
        className={className}
        onClick={handleClickScroll}
    >
        {children}
    </button>)
}