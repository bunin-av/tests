import React from "react";

export type ButtonType = {
    title:string
    isDisabled: boolean
    onClickHandler: () => void
}

export function Button(props: ButtonType) {

    return (
        <button
            className='button'
            onClick={props.onClickHandler}
            disabled={props.isDisabled}
        >{props.title}
        </button>
    )
}