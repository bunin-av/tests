import React from "react";

type ScreenPropsType = {
    value: number
}

export function Screen(props: ScreenPropsType) {
    const screenClass = `screen ${props.value === 5 ? 'maxValue' : ''}`

    return (
      <div className={screenClass}>
          {props.value}
      </div>
    )
}