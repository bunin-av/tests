import React from "react";
import {Button} from "../../../Button/Button";

export type ResButtonType = {
    setSettMode: () => void
}

export function SetModeButton(props: ResButtonType) {
    return (
        <Button
            title={'set'}
            onClickHandler={props.setSettMode}
            isDisabled={false}
        />
    )
}