import React, {ReactElement} from "react";
import {Tooltip, makeStyles} from "@material-ui/core";

type PropTYPES = {
    children :  ReactElement
}

const tooltipStyles = makeStyles({
    tooltip: {
        padding : '10px',
        backgroundColor: '#000000',
        boxShadow : '3px 3px 8px rgba(0, 0, 0, 0.3)',
    },

})

export const EclipseTooltip = ({ children } : PropTYPES) => {

    const [activeTooltip, setTooltip] = React.useState(true)
    const [text, setText] = React.useState('')
    const { tooltip } = tooltipStyles();


    const handleMouseEnter = (e : React.MouseEvent) => {
        const target = e.currentTarget as HTMLDivElement
        const maxContentWidth = target.offsetWidth
        const contentWidth = target.scrollWidth
        const maxContentHeight = target.offsetHeight
        const contentHeight = target.scrollHeight

        if (contentWidth > maxContentWidth || contentHeight > maxContentHeight) {
            setTooltip(false)
            setText(target.innerText)
        }
        else {
            setTooltip(true)
        }
    }

    return (
        <Tooltip
            title={ <p style={{
                fontSize : 14,
                lineHeight : '1.5',
                color : '#fefefe',
            }}
            >
                {text}

            </p>}
            disableHoverListener={activeTooltip}
            style={{ cursor : !activeTooltip ? 'pointer' : '' }}

            onMouseEnter={handleMouseEnter}
            classes={{ tooltip }}
        >

            {children}
        </Tooltip>
    )
}