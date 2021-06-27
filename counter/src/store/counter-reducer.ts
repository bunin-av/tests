import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    counterValue: number
    startValue: number
    maxValue: number
    isChangingParameters: boolean
    isError: boolean
    settMode: boolean
}

const initialState = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    isChangingParameters: false,
    isError: false,
    settMode: false
} as InitialState

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incValue(state) {
            state.counterValue++
        },
        resetValue(state) {
            state.counterValue = 0
        },
        addStartValue(state, action: PayloadAction<number>) {
            state.isChangingParameters = true
            state.startValue = action.payload
        },
        addMaxValue(state, action: PayloadAction<number>) {
            state.isChangingParameters = true
            state.maxValue = action.payload
        },
        setError(state, action: PayloadAction<boolean>) {
            state.isError = action.payload
        },
        setSettMode(state, action: PayloadAction<boolean>) {
            state.settMode = action.payload
        },
        setParameters(state) {
            state.counterValue = state.startValue
            state.settMode = false
            state.isChangingParameters = false
        },
    }
})


export default counterSlice.reducer
export const {
    incValue,
    resetValue,
    addStartValue,
    addMaxValue,
    setError,
    setSettMode,
    setParameters,
} = counterSlice.actions
// export const selectCount = (state: RootStateType) => state.counter