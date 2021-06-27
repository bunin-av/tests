import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage";


const reducer = {
    counter: counterSlice,
}

export const store = configureStore({reducer, preloadedState: loadState()})


export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

//@ts-ignore
window.store = store