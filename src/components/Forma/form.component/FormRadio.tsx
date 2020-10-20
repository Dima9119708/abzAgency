import React from "react";
import {FormControl, FormControlLabel, makeStyles, Radio, RadioGroup} from "@material-ui/core";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../../redux/reducer";
import {SET_FORM_RADIO_ACTION} from "../../../redux/action";

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        backgroundColor: '#ffffff',
        border : '1px solid #adb5bd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },

    },
    checkedIcon: {
        backgroundColor: '#007bff',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 14,
            height: 14,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
    },
});

export const StyledRadio = (props : any) => {

    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

export const FormRadio = () => {

    const [value, setValue] = React.useState('');
    const { loadRadioButtons, radioButtons } = useSelector((state : InitialStateType) => state)
    const dispatch = useDispatch()

    const handleChange = (e : React.ChangeEvent) => {
        const radio = e.target as HTMLInputElement
        setValue(radio.value)

        const item = radioButtons.find(item => {
           if (item.name === radio.value) {
               return item
           }
        })

        dispatch(SET_FORM_RADIO_ACTION(item!.id))
    }

    if(!loadRadioButtons) {
        return (<>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>)
    }

    return (<>
        <h5 className="form__title">Select your position</h5>
        <FormControl component="fieldset">
            <RadioGroup
                value={ value
                            ? value
                            : radioButtons.length
                                      ? radioButtons[0].name
                                      : ''
                }
                onChange={handleChange}
            >

                { radioButtons.map(item => {
                    return <FormControlLabel
                        key={item.name}
                        value={item.name}
                        control={<StyledRadio />}
                        label={item.name} />
                })}

            </RadioGroup>
        </FormControl>
    </>)
}