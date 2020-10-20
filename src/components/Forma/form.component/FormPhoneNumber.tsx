import React from "react";
import {useDispatch} from "react-redux";
import {SET_FORM_PHONE_NUMBER_ACTION} from "../../../redux/action";

const validPhone = /^\+?3?8?(0\d{9})$/

export const FormPhoneNumber = () => {

    const [errorText, setText] = React.useState('')
    const dispatch = useDispatch()

    const handleChange = (e : React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        const { value } = input
        const startWith = value.startsWith('+380') || value.startsWith('380')
        const valueValidate = value.startsWith('380')
                              ? validPhone.test(value)
                              : validPhone.test(value.substr(1))

        if ( startWith && valueValidate ) {
            input.style.border = '1px solid #80bdff'
            input.style.boxShadow = '0 0 2px #80bdff'
            setText('')

            if (value.startsWith('+380')) {
                dispatch(SET_FORM_PHONE_NUMBER_ACTION(value))
            }
            else {
                dispatch(SET_FORM_PHONE_NUMBER_ACTION('+' + value))
            }
        }
        else {
            input.style.border = '1px solid #db3445'
            input.style.boxShadow = '0 0 2px #db3445'
            setText('Invalid phone number')
            dispatch(SET_FORM_PHONE_NUMBER_ACTION(''))
        }
    }

    return (<>
        <label className="form__label" htmlFor="Phone number">Phone number</label>
        <input
            onChange={handleChange}
            className="form__input"
            type="text" id="Phone number"
            placeholder="+380 XX XXX XX XX"
        />
        <p className="form__error">{errorText}</p>
        <p className="form__text">Еnter phone number in open format</p>
    </>)
}