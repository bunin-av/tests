import React from "react";
import {Button} from "../../../Button/Button";

export type IncButtonType = {
    incValue: () => void
    value: number
    maxValue: number
}

export function IncButton(props: IncButtonType) {
    return (
        <Button
            title={'inc'}
            isDisabled={props.value === props.maxValue}
            onClickHandler={props.incValue}/>
    )
}