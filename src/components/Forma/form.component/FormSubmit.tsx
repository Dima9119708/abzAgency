import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../../redux/reducer";
import {postFormDATA} from "../../../redux/actionAsync";

export const FormSubmit = () => {

    const [errorDiv, setError] = React.useState('')
    const { forma, token } = useSelector((state : InitialStateType) => state)
    const dispatch = useDispatch()

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if ( forma.photo && forma.phone && forma.name && forma.email ) {
            setError('')
            dispatch(postFormDATA(forma, token))
        } else {
            setError('Incorrect data entered or fields are empty')
        }
    }

    return (
        <div
            style={{
                display : "flex",
                flexDirection : 'column',
                alignItems : "center",
            }}
        >
            <p className="form__error">{errorDiv}</p>
            <button
                onClick={handleSubmit}
                className="sing__button"
                type="submit"
            >
                Sing up now
            </button>
    </div>)
}