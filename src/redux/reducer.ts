import {
    SET_FORMA_OFFSET_TOP,
    SET_MENU_MOBILE,
    SET_PRELOADER_FORMA_RADIO,
    SET_RADIO_BUTTONS,
    SET_USERS_OFFSET_TOP,
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


type ActionType = {
    type : string
    flagMenu : boolean
    formaDiv : HTMLDivElement
    userDiv : HTMLDivElement
    loadRadioButtons : boolean
    loadUsers : boolean
    loadingUsers : boolean
    positions : Array<{id : number, name: string}>
    data : string,
    position : number
    users : {
        links : {next_url : string }
        users : Array<{
            id : number
            name : string
            email : string
            phone : string
            photo : string
            position : string
            registration_timestamp : number
        }>
    }
}

export type FormaType = {
    name : string
    email : string
    position_id : number,
    photo : string
    phone : string
}

const initialState = {

    loadUsers : false,
    loadingUsers : true,
    loadingUsersSuccess : true,

    flagMenu : false,
    formaDiv : null,
    userDiv : null,
    loadRadioButtons : false,
    radioButtons : [{id : 0, name : ''}],
    token : '',
    users : {
        links: { next_url: "" },
        users: [
            {
                id: 1,
                name: "",
                email: "",
                phone: "",
                photo : '',
                position: "",
                registration_timestamp : 0
            }
        ]
    },
    forma : {
        name : '',
        email : '',
        phone : '',
        position_id : 1,
        photo : ''
    }
}

export type InitialStateType = typeof initialState

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
                formaDiv : action.formaDiv
            }

        case SET_USERS_OFFSET_TOP :

            return {
                ...state,
                userDiv : action.userDiv
            }

        case SET_PRELOADER_FORMA_RADIO :

            return {
                ...state,
                loadRadioButtons : action.loadRadioButtons
            }

        case SET_RADIO_BUTTONS :

            state.forma.position_id = action.positions[0].id

            return {
                ...state,
                radioButtons : action.positions
            }

        case SET_TOKEN :

            return {
                ...state,
                token : action.data
            }

        case SET_FORM_NAME :

            state.forma.name = action.data

            return {
                ...state,
            }

        case SET_FORM_EMAIL :

            state.forma.email = action.data

            return {
                ...state,
            }

        case SET_FORM_PHONE_NUMBER :

            state.forma.phone = action.data

            return {
                ...state,
            }

        case SET_FORM_RADIO :

            state.forma.position_id = action.position

            return {
                ...state,
            }

        case SET_FORM_IMAGE :

            state.forma.photo = action.data

            return {
                ...state,
            }

        case SET_USERS_LOAD :

            return {
                ...state,
                loadUsers : action.loadUsers
            }

        case SET_USERS :

            return {
                ...state,
                users: action.users
            }

        case SET_LOADING_USERS :

            state.users.users = [...state.users.users , ...action.users.users]
            state.users.links = action.users.links

            return {
                ...state,
            }

        case SET_PRELOAD_USERS :

            return {
                ...state,
                loadingUsers: action.loadingUsers
            }

        case SET_LOADING_USERS_SUCCESS :

            return {
                ...state,
                loadingUsersSuccess: action.data
            }

        default:
            return {
                ...state,
            }
    }
}