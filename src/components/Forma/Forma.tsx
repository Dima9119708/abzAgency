import React from "react";
import {FormControl, RadioGroup, FormControlLabel } from "@material-ui/core";
import { StyledRadio } from "./RadioButtonStyle";
import {useDispatch} from "react-redux";
import {SET_FORMA_OFFSET_TOP_ACTION} from "../../redux/action";


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

                        <label className="form__label" htmlFor="name">Name</label>
                        <input className="form__input" id="name" placeholder="Your name"/>
                        <p className="form__error"></p>

                    </div>

                    <div className="form__block">

                        <label className="form__label" htmlFor="Email">Email</label>
                        <input className="form__input" id="Email" placeholder="Your email"/>
                        <p className="form__error"></p>

                    </div>

                    <div className="form__block">

                        <label className="form__label" htmlFor="Phone number">Phone number</label>
                        <input className="form__input" type="number" id="Phone number" placeholder="+380 XX XXX XX XX"/>
                        <p className="form__error"></p>
                        <p className="form__text">Еnter phone number in open format</p>

                    </div>

                    <div className="form__block">

                        <h5 className="form__title">Select your position</h5>
                        <FormControl component="fieldset">
                            <RadioGroup defaultValue="Frontend developer" aria-label="gender" name="customized-radios">
                                <FormControlLabel value="Frontend developer" control={<StyledRadio />} label="Frontend developer" />
                                <FormControlLabel value="Backend developer" control={<StyledRadio />} label="Backend developer" />
                                <FormControlLabel value="Designer" control={<StyledRadio />} label="Designer" />
                                <FormControlLabel value="QA" control={<StyledRadio />} label="QA" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="form__block">

                        <div className="form__inner">
                         <input
                             className="form__input"
                             type="text" disabled
                             style={{backgroundColor : '#ffffff'}}
                             placeholder="Upload your photo"
                         />
                         <input className="form__input-file" id="file" type="file"/>
                         <label className="form__input-file-label" htmlFor="file">Browse</label>
                        </div>
                        <p className="form__error"></p>
                    </div>

                    <div className="form__button">
                        <button className="sing__button" type="submit">Sing up now</button>
                    </div>

                </form>
            </div>
        </section>
    )
}