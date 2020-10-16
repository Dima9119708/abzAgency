import React from "react";
import {useDispatch} from "react-redux";
import {SET_FORMA_OFFSET_TOP_ACTION} from "../../redux/action";
import {FormName} from "./form.component/FormName";
import {FormEmail} from "./form.component/FormEmail";
import {FormPhoneNumber} from "./form.component/FormPhoneNumber";
import {FormRadio} from "./form.component/FormRadio";
import {FormLoadImage} from "./form.component/FormLoadImage";


export const Forma = () => {

    const $formDiv = React.useRef(null)
    const dispatch = useDispatch()

    React.useEffect(() => {

        const $forma = $formDiv.current! as HTMLDivElement
        const offsetTop = $forma.offsetTop
        dispatch(SET_FORMA_OFFSET_TOP_ACTION(offsetTop))

    }, [$formDiv])

    return (
        <section ref={$formDiv} className="forma boxPadding">
            <div className="container">
                <div className="forma__title">
                    <h2 className="title">Register to get a work</h2>
                    <p className="forma__subtitle">
                        Attention! After successful registration and alert,
                        update the list of users in the block from the top
                    </p>
                </div>
                <form className="form">

                    <div className="form__block">
                        <FormName />
                    </div>

                    <div className="form__block">
                        <FormEmail />
                    </div>

                    <div className="form__block">
                        <FormPhoneNumber />
                    </div>

                    <div className="form__block">
                        <FormRadio />
                    </div>

                    <div className="form__block">
                       <FormLoadImage />
                    </div>

                    <div className="form__button">
                        <button className="sing__button" type="submit">Sing up now</button>
                    </div>

                </form>
            </div>
        </section>
    )
}