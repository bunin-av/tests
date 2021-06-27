import React from "react";

export type ScreenPropsType = {
    maxValue: number
    startValue: number
    isError: boolean
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (value: boolean) => void
}

export function SetterScreen(props: ScreenPropsType) {


    const setMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        props.setMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value === props.startValue
            || +e.currentTarget.value < props.startValue) {
            props.setError(true)
        }
    }
    const setStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        props.setStartValue(+e.currentTarget.value)
        if (+e.currentTarget.value === props.maxValue
            || +e.currentTarget.value < 0
            || +e.currentTarget.value > props.maxValue) {
            props.setError(true)
        }
    }


    return (
        // <div className={screenClass}>
        <div className='screen parameters_screen'>
            <div className='parameters'>
                max value:
                start value:
            </div>
            <div className='parameters__input'>
                <input
                    type='number'
                    value={props.maxValue}
                    onChange={setMaxValue}
                    className={props.isError ? 'input input__error' : 'input'}
                />
                <input
                    type='number'
                    value={props.startValue}
                    onChange={setStartValue}
                    className={props.isError ? 'input input__error' : 'input'}
                />
            </div>
        </div>
    )
}