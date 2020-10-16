import React from "react";
import {FormControl, FormControlLabel, makeStyles, Radio, RadioGroup} from "@material-ui/core";
import clsx from "clsx";

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

    const handleChange = (e : React.ChangeEvent) => {

        const radio = e.target as HTMLInputElement

    }

    return (<>
        <h5 className="form__title">Select your position</h5>
        <FormControl component="fieldset">
            <RadioGroup
                onChange={handleChange}
                defaultValue="Frontend developer"
                aria-label="gender"
                name="customized-radios">
                <FormControlLabel value="Frontend developer" control={<StyledRadio />} label="Frontend developer" />
                <FormControlLabel value="Backend developer" control={<StyledRadio />} label="Backend developer" />
                <FormControlLabel value="Designer" control={<StyledRadio />} label="Designer" />
                <FormControlLabel value="QA" control={<StyledRadio />} label="QA" />
            </RadioGroup>
        </FormControl>
    </>)
}