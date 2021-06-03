import {IncButton} from "./IncButton/IncButton";
import {ResButton} from "./ResButton/ResButton";
import React from "react";
import {Counter} from "../Counter";
import {SetButton} from "../../ParametersSetter/SetButton/SetButton";
import {SetModeButton} from "./SetModeButton/SetModeButton";

export type ButtonPanelType = {
    value: number
    incValue: () => void
    resetValue: () => void
    maxValue: number
    settMode?: boolean
    setSettMode: () => void
}

export function ButtonPanel(props: ButtonPanelType) {
    return (
        <div className="buttonPanel">
            <IncButton
                incValue={props.incValue}
                value={props.value}
                maxValue={props.maxValue}
            />
            <ResButton
                resValue={props.resetValue}
                value={props.value}
            />
            {!props.settMode &&
            <SetModeButton setSettMode={props.setSettMode}/>
            }
        </div>
    )
}