import React, { useEffect, useState } from 'react'
import { CanvasBackdrop, CustomCanvasOuter } from './CustomCanvas.style'

const CustomCanvas = (props) => {
    const [className, setclassName] = useState('')
    const [realTrue, setRealTrue] = useState(false);
    useEffect(() => {
        const runThisFunc = e => {
            setTimeout(() => {
                setclassName(e)
            }, 200);
        }
        if (props.show) {
            setRealTrue(props.show);
            runThisFunc('show_canvas')
        } else {
            setTimeout(() => {
                setRealTrue(props.show);
            }, 400);
            runThisFunc('')
        }
    }, [props.show])
    return (
        <>
            {
                realTrue &&
                <CustomCanvasOuter
                    close={props.handleClose}
                    className={`custom_convas ${className}`}
                >
                    <CanvasBackdrop onClick={props.handleClose} />
                    {props.children}
                </CustomCanvasOuter>
            }
        </>
    )
}

export default CustomCanvas