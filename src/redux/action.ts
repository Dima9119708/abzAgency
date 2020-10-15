import {SET_MENU_MOBILE, SET_FORMA_OFFSET_TOP, SET_USERS_OFFSET_TOP} from "./constants";


type SET_MOBILE_MENU_TYPE = {
    type : typeof SET_MENU_MOBILE,
    flagMenu : boolean
}

export const SET_MOBILE_MENU_ACTION = (flagMenu : boolean) : SET_MOBILE_MENU_TYPE => {
    return {
        type : SET_MENU_MOBILE,
        flagMenu
    }
}


type SET_FORMA_OFFSET_TOP_TYPE = {
    type : typeof SET_FORMA_OFFSET_TOP,
    formaOffsetTop : number
}

export const SET_FORMA_OFFSET_TOP_ACTION = (formaOffsetTop : number) : SET_FORMA_OFFSET_TOP_TYPE => {
    return {
        type : SET_FORMA_OFFSET_TOP,
        formaOffsetTop
    }
}

type SET_USERS_OFFSET_TOP_TYPE = {
    type : typeof SET_USERS_OFFSET_TOP,
    usersOffsetTop : number
}

export const SET_USERS_OFFSET_TOP_ACTION = (usersOffsetTop : number) : SET_USERS_OFFSET_TOP_TYPE => {
    return {
        type : SET_USERS_OFFSET_TOP,
        usersOffsetTop
    }
}