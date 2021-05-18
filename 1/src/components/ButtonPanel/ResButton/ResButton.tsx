import React from "react";

type ResButtonType = {
    resValue: () => void
    value: number
}

export function ResButton(props: ResButtonType) {
    const onClick = () => props.resValue()

    return (
      <button className='button' onClick={onClick} disabled={!props.value}>
          reset
      </button>
    )
}