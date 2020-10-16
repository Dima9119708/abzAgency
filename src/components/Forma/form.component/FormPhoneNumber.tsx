import React from "react";

const validPhone = /^\+?3?8?(0\d{9})$/

export const FormPhoneNumber = () => {

    const input = React.useRef<HTMLInputElement>(null)
    const errorDiv = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {


    }, [input])

    const handleChange = (e : React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        const { value } = input
        const errDiv = errorDiv.current!

        if (validPhone.test(value)) {
            input.style.border = '1px solid #80bdff'
            input.style.boxShadow = '0 0 2px #80bdff'
            errDiv.innerHTML = ''
        }
        else {
            input.style.border = '1px solid #db3445'
            input.style.boxShadow = '0 0 2px #db3445'
            errDiv.innerHTML = 'Invalid phone number'
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
        <p ref={errorDiv} className="form__error"></p>
        <p className="form__text">Еnter phone number in open format</p>
    </>)
}