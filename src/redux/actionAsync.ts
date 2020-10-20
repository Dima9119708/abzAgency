import {Dispatch} from "react";
import {
    SET_LOAD_RADIO_BUTTONS_ACTION,
    SET_LOAD_USERS_ACTION,
    SET_LOADING_USER_ACTION, SET_LOADING_USERS_SUCCESS_TYPE_ACTION,
    SET_PRELOAD_USER_ACTION,
    SET_RADIO_BUTTONS_ACTION,
    SET_TOKEN_ACTION, SET_USERS_ACTION
} from "./action";
import {FormaType} from "./reducer";


export type TokenType = {
    token : string
}
export function getToken() {
    return (dispatch : Dispatch<any>) => {

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(res => res.json())
            .then( ( data : TokenType ) => {
                dispatch(SET_TOKEN_ACTION(data.token))
            })
    }
}


export type PositionsType = {
    positions : Array<{id : number, name: string}>
}
export function getFormRadioDATA() {
    return (dispatch : Dispatch<any>) => {

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(res => res.json())
            .then( (data : PositionsType) => {
                dispatch(SET_LOAD_RADIO_BUTTONS_ACTION(true))
                dispatch(SET_RADIO_BUTTONS_ACTION(data.positions))
            })
    }
}


export function getUsers() {
    return (dispatch : Dispatch<any>) => {

        const windowInner = window.innerWidth < 768 ? 'page=1&count=3' : 'page=1&count=6'

        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?${windowInner}`)
            .then(res => res.json())
            .then( (data) => {
                dispatch(SET_LOAD_USERS_ACTION(true))
                dispatch(SET_USERS_ACTION(data))
            })
    }
}


function checkBrokenPhoto(imgURL : string) {
    return new Promise(resolve => {
        const image = new Image
        image.src = imgURL
        image.onload = () => resolve(imgURL)
        image.onerror = () => resolve('')
    })
}
export function getLoadingUsers(link : string) {
    return (dispatch : Dispatch<any>) => {

        fetch(link)
            .then(res => res.json())
            .then( (data) => {

                if (data.success) {

                    const items = data.users.map( async item => {
                        item.photo = await checkBrokenPhoto(item.photo)
                        return item
                    })

                    Promise.all(items)
                        .then(verifiedItems => {
                            data.users = verifiedItems
                            return data
                        })
                        .then(verifiedDATA => {
                            dispatch(SET_LOADING_USERS_SUCCESS_TYPE_ACTION(true))
                            dispatch(SET_PRELOAD_USER_ACTION(true))
                            dispatch(SET_LOADING_USER_ACTION(verifiedDATA))
                        })
                }
                else {
                    dispatch(SET_LOADING_USERS_SUCCESS_TYPE_ACTION(false))
                }
            })
    }
}


export function postFormDATA(forma : FormaType, token : string) {
    return dispatch => {

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Token': token,
            },
            body: JSON.stringify(forma)
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }
}
