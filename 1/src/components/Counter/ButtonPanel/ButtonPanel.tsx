import {IncButton} from "./IncButton/IncButton";
import {ResButton} from "./ResButton/ResButton";
import React from "react";

export type ButtonPanelType = {
    value: number
    incValue: () => void
    resetValue: () => void
    maxValue: number
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
      </div>
    )
}