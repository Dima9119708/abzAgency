import React from "react";

const validEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export const FormEmail = () => {

    const errorDiv = React.useRef<HTMLDivElement>(null)

    const handleChange = (e : React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        const {value} = input
        const errDiv = errorDiv.current!

        if (validEmail.test(value)) {
            input.style.border = '1px solid #80bdff'
            input.style.boxShadow = '0 0 2px #80bdff'
            errDiv.innerHTML = ''
        }
        else {
            input.style.border = '1px solid #db3445'
            input.style.boxShadow = '0 0 2px #db3445'
            errDiv.innerHTML = 'Invalid email'
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
            <p
                ref={errorDiv}
                className="form__error"
            ></p>
        </>
    )
}