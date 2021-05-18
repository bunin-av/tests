import {IncButton} from "./IncButton/IncButton";
import {ResButton} from "./ResButton/ResButton";
import React from "react";

type ButtonPanelType = {
    value: number
    incValue: () => void
    resetValue: () => void
}
export function ButtonPanel(props: ButtonPanelType) {
    return (
      <div className="buttonPanel">
          <IncButton incValue={props.incValue} value={props.value}/>
          <ResButton resValue={props.resetValue} value={props.value}/>
      </div>
    )
}