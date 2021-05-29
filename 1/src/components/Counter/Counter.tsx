import {CounterScreen, ScreenPropsType} from "./Screen/CounterScreen";
import {ButtonPanel, ButtonPanelType} from "./ButtonPanel/ButtonPanel";
import React from "react";


export function Counter(props: ScreenPropsType & ButtonPanelType) {

    return (
      <div className="container">
          <CounterScreen
            value={props.value}
            maxValue={props.maxValue}
            isChangingParameters={props.isChangingParameters}
            isError={props.isError}
          />
          <ButtonPanel
            incValue={props.incValue}
            resetValue={props.resetValue}
            value={props.value}
            maxValue={props.maxValue}
          />
      </div>
    )
}