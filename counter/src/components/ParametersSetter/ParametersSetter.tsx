import React from "react";
import {SetterScreen} from "./SetterScreen/SetterScreen";
import {SetButton} from "./SetButton/SetButton";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addMaxValue, addStartValue, setError, setParameters} from "../../store/counter-reducer";


export function ParametersSetter() {
    const state = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    const doSetStartValue = (value: number) => dispatch(addStartValue(value))
    const doSetMaxValue = (value: number) => dispatch(addMaxValue(value))
    const doSetError = (value: boolean) => dispatch(setError(value))

    return (
      <div className="container">
          <SetterScreen
            maxValue={state.maxValue}
            startValue={state.startValue}
            setStartValue={doSetStartValue}
            setMaxValue={doSetMaxValue}
            isError={state.isError}
            setError={doSetError}
          />
          <SetButton
            setParameters={() => dispatch(setParameters())}
            isError={state.isError}
          />
      </div>
    )
}