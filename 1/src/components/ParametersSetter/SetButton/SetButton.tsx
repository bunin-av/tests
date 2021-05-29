import {Button} from "../../Button/Button";

type SetButtonPropsType = {
    setParameters: () => void
    isError: boolean
}

export function SetButton(props: SetButtonPropsType) {
    return (
      <div className='buttonPanel'>
          <Button
              title={'set'}
              isDisabled={props.isError}
              onClickHandler={props.setParameters}/>
      </div>
    )
}