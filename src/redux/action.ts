import {
    SET_MENU_MOBILE,
    SET_FORMA_OFFSET_TOP,
    SET_USERS_OFFSET_TOP,
    SET_PRELOADER_FORMA_RADIO,
    SET_RADIO_BUTTONS,
    SET_FORM_NAME,
    SET_FORM_EMAIL,
    SET_FORM_PHONE_NUMBER,
    SET_FORM_RADIO,
    SET_FORM_IMAGE,
    SET_TOKEN,
    SET_USERS_LOAD,
    SET_USERS,
    SET_LOADING_USERS,
    SET_PRELOAD_USERS,
    SET_LOADING_USERS_SUCCESS
} from "./constants";


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
    formaDiv : HTMLDivElement
}
export const SET_FORMA_OFFSET_TOP_ACTION = (formaDiv : HTMLDivElement) : SET_FORMA_OFFSET_TOP_TYPE => {
    return {
        type : SET_FORMA_OFFSET_TOP,
        formaDiv
    }
}


type SET_USERS_OFFSET_TOP_TYPE = {
    type : typeof SET_USERS_OFFSET_TOP,
    userDiv : HTMLDivElement
}
export const SET_USERS_OFFSET_TOP_ACTION = (userDiv : HTMLDivElement) : SET_USERS_OFFSET_TOP_TYPE => {
    return {
        type : SET_USERS_OFFSET_TOP,
        userDiv
    }
}


export  type SET_LOAD_FORMA_RADIO_TYPE = {
    type : typeof SET_PRELOADER_FORMA_RADIO,
    loadRadioButtons : boolean
}
export const SET_LOAD_RADIO_BUTTONS_ACTION = (loadRadioButtons : boolean) : SET_LOAD_FORMA_RADIO_TYPE => {

    return {
        type : SET_PRELOADER_FORMA_RADIO,
        loadRadioButtons
    }
}

export type SET_RADIO_BUTTONS_TYPE = {
    type : typeof SET_RADIO_BUTTONS,
    positions : Array<{id : number, name : string}>
}
export const SET_RADIO_BUTTONS_ACTION = (positions : Array<{id : number, name : string}>) : SET_RADIO_BUTTONS_TYPE => {
    return {
        type : SET_RADIO_BUTTONS,
        positions
    }
}


export  type SET_LOAD_USERS_TYPE = {
    type : typeof SET_USERS_LOAD,
    loadUsers : boolean
}
export const SET_LOAD_USERS_ACTION = (loadUsers : boolean) : SET_LOAD_USERS_TYPE => {

    return {
        type : SET_USERS_LOAD,
        loadUsers
    }
}


export type SET_USERS_TYPE = {
    type : typeof SET_USERS,
    users : object
}
export const SET_USERS_ACTION = (users : object) : SET_USERS_TYPE => {

    return {
        type : SET_USERS,
        users
    }
}


type SET_TOKEN_TYPE = {
    type : typeof SET_TOKEN,
    data : string
}
export const SET_TOKEN_ACTION = (data : string) : SET_TOKEN_TYPE => {
    return {
        type : SET_TOKEN,
        data
    }
}


type SET_LOADING_USER_TYPE = {
    type : typeof SET_LOADING_USERS,
    users : object
}
export const SET_LOADING_USER_ACTION = (users : object) : SET_LOADING_USER_TYPE => {

    return {
        type : SET_LOADING_USERS,
        users
    }
}


type SET_PRELOAD_USER_TYPE = {
    type : typeof SET_PRELOAD_USERS,
    loadingUsers : boolean
}
export const SET_PRELOAD_USER_ACTION = (loadingUsers : boolean) : SET_PRELOAD_USER_TYPE => {
    return {
        type : SET_PRELOAD_USERS,
        loadingUsers
    }
}


type SET_FORM_NAME_TYPE = {
    type : typeof SET_FORM_NAME,
    data : string
}
export const SET_FORM_NAME_ACTION = (data : string) : SET_FORM_NAME_TYPE => {
    return {
        type : SET_FORM_NAME,
        data
    }
}


type SET_FORM_EMAIL_TYPE  = {
    type : typeof SET_FORM_EMAIL,
    data : string
}
export const SET_FORM_EMAIL_ACTION = (data : string) : SET_FORM_EMAIL_TYPE => {
    return {
        type : SET_FORM_EMAIL,
        data
    }
}


type SET_FORM_PHONE_NUMBER_TYPE  = {
    type : typeof SET_FORM_PHONE_NUMBER,
    data : string
}
export const SET_FORM_PHONE_NUMBER_ACTION = (data : string) : SET_FORM_PHONE_NUMBER_TYPE => {
    return {
        type : SET_FORM_PHONE_NUMBER,
        data
    }
}


type SET_FORM_RADIO_TYPE  = {
    type : typeof SET_FORM_RADIO,
    position : number
}
export const SET_FORM_RADIO_ACTION = (position : number) : SET_FORM_RADIO_TYPE => {
    return {
        type : SET_FORM_RADIO,
        position
    }
}


type SET_FORM_IMAGE_TYPE  = {
    type : typeof SET_FORM_IMAGE,
    data : any
}
export const SET_FORM_IMAGE_ACTION = (data : any) : SET_FORM_IMAGE_TYPE => {
    return {
        type : SET_FORM_IMAGE,
        data
    }
}

type SET_LOADING_USERS_SUCCESS_TYPE  = {
    type : typeof SET_LOADING_USERS_SUCCESS,
    data : boolean
}
export const SET_LOADING_USERS_SUCCESS_TYPE_ACTION = (data : boolean) : SET_LOADING_USERS_SUCCESS_TYPE => {
    return {
        type : SET_LOADING_USERS_SUCCESS,
        data
    }
}

