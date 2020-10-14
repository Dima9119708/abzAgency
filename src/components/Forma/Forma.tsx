import React from "react";
import {FormControl, RadioGroup, FormControlLabel } from "@material-ui/core";
import { StyledRadio } from "./RadioButtonStyle";


export const Forma = () => {

    return (
        <div className="forma boxPadding">
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
                        <p className="form__error">Error</p>

                    </div>

                    <div className="form__block">

                        <label className="form__label" htmlFor="name">Email</label>
                        <input className="form__input" id="name" placeholder="Your email"/>
                        <p className="form__error"></p>

                    </div>

                    <div className="form__block">

                        <label className="form__label" htmlFor="name">Phone number</label>
                        <input className="form__input" type="number" id="name" placeholder="+380 XX XXX XX XX"/>
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

                </form>
            </div>
        </div>
    )
}