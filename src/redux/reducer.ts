import {SET_FORMA_OFFSET_TOP, SET_MENU_MOBILE, SET_USERS_OFFSET_TOP} from "./constants";

type ActionType = {
    type : string
    flagMenu : boolean,
    formaOffsetTop : number
    usersOffsetTop : number
}

export type InitialStateType = {
    flagMenu : boolean,
    formaOffsetTop : number
    usersOffsetTop : number
}

const initialState : InitialStateType = {
    flagMenu : false,
    formaOffsetTop : 0,
    usersOffsetTop : 0
}

export const reducer = (state = initialState, action : ActionType) => {

    switch(action.type) {

        case SET_MENU_MOBILE:

            return {
                ...state,
                flagMenu : action.flagMenu
            }

        case SET_FORMA_OFFSET_TOP :


            return {
                ...state,
                formaOffsetTop : action.formaOffsetTop
            }

        case SET_USERS_OFFSET_TOP :

            return {
                ...state,
                usersOffsetTop : action.usersOffsetTop
            }

        default:
            return {
                ...state
            }
    }
}