import React from "react";

type IncButtonType = {
    incValue: () => void
    value: number
}

export function IncButton(props: IncButtonType) {
    const onClick = () => props.incValue()

    return (
      <button className='button' onClick={onClick} disabled={props.value === 5}>
          inc
      </button>
    )
}