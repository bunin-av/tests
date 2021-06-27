import {IncButton} from "./IncButton/IncButton";
import {ResButton} from "./ResButton/ResButton";
import React from "react";
import {SetModeButton} from "./SetModeButton/SetModeButton";
import {incValue, resetValue, setSettMode} from "../../../store/counter-reducer";
import {useAppDispatch} from "../../../store/hooks";

export type ButtonPanelType = {
    value: number
    maxValue: number
    settMode?: boolean
}

export function ButtonPanel(props: ButtonPanelType) {

    const dispatch = useAppDispatch()

    return (
      <div className="buttonPanel">
          <IncButton
            incValue={() => dispatch(incValue())}
            value={props.value}
            maxValue={props.maxValue}
          />
          <ResButton
            resValue={() => dispatch(resetValue())}
            value={props.value}
          />
          {!props.settMode &&
          <SetModeButton setSettMode={() => dispatch(setSettMode(true))}/>
          }
      </div>
    )
}