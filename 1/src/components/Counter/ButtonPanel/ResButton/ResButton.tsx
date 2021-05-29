import React from "react";
import {Button} from "../../../Button/Button";

export type ResButtonType = {
    resValue: () => void
    value: number
}

export function ResButton(props: ResButtonType) {
    return (
        <Button
            title={'res'}
          isDisabled={!props.value}
          onClickHandler={props.resValue}/>
    )
}