import React from "react";

export type ScreenPropsType = {
    value: number
    maxValue: number
    isChangingParameters: boolean
    isError: boolean
}

export function CounterScreen(props: ScreenPropsType) {
    const screenClass = `screen ${props.value === props.maxValue || props.isError ? 'maxValue' : ''}`

    return (
        <div className={screenClass}>
            {(props.isError)
                ? `Incorrect value!`
                : (props.isChangingParameters)
                    ? `enter values and press 'set'`
                    : props.value
            }
        </div>
    )
}