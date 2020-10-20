import React from "react";
import {useDispatch} from "react-redux";
import {SET_FORM_EMAIL_ACTION} from "../../../redux/action";

const validEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export const FormEmail = () => {

    const [errorText, setText] = React.useState('')
    const dispatch = useDispatch()

    const handleChange = (e : React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        const {value} = input

        if (validEmail.test(value)) {
            input.style.border = '1px solid #80bdff'
            input.style.boxShadow = '0 0 2px #80bdff'
            setText('')
            dispatch(SET_FORM_EMAIL_ACTION(value))
        }
        else {
            input.style.border = '1px solid #db3445'
            input.style.boxShadow = '0 0 2px #db3445'
            setText('Invalid email')
            dispatch(SET_FORM_EMAIL_ACTION(''))
        }
    }

    return (
        <>
            <label className="form__label" htmlFor="Email">Email</label>
            <input
                onChange={handleChange}
                className="form__input" id="Email"
                placeholder="Your email"
            />
            <p className="form__error">{errorText}</p>
        </>
    )
}