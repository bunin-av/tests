import {CounterScreen} from "./Screen/CounterScreen";
import {ButtonPanel} from "./ButtonPanel/ButtonPanel";
import React from "react";
import {useAppSelector} from "../../store/hooks";


export function Counter() {
    const state = useAppSelector(state => state.counter)
    return (
      <div className="container">
          <CounterScreen
            value={state.counterValue}
            maxValue={state.maxValue}
            isChangingParameters={state.isChangingParameters}
            isError={state.isError}
          />
          <ButtonPanel
            value={state.counterValue}
            maxValue={state.maxValue}
          />
      </div>
    )
}