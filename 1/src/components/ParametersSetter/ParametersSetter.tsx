import React from "react";
import {SetterScreen} from "./SetterScreen/SetterScreen";
import {SetButton} from "./SetButton/SetButton";

type ParametersSetterPropsType = {
    maxValue: number
    startValue: number
    isError: boolean
    setParameters: () => void
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (value:boolean)=> void
}

export function ParametersSetter(props: ParametersSetterPropsType) {
    return (
      <div className="container">
          <SetterScreen
            maxValue={props.maxValue}
            startValue={props.startValue}
            setStartValue={props.setStartValue}
            setMaxValue={props.setMaxValue}
            isError={props.isError}
            setError={props.setError}
          />
          <SetButton
              setParameters={props.setParameters}
              isError={props.isError}
          />
      </div>
    )
}