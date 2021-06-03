import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {ParametersSetter} from "./components/ParametersSetter/ParametersSetter";


function App() {
    //Counter
    const [counterValue, setCounterValue] = useState<number>(0)
    const incValue = () => setCounterValue(counterValue + 1)
    const resetValue = () => setCounterValue(0)

    //ParametersSetter
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [isChangingParameters, setChangingParameters] = useState<boolean>(false)
    const [isError, setError] = useState<boolean>(false)
    const [settMode, setSettMode] = useState<boolean>(false)

    const addStartValue = (value: number) => {
        setChangingParameters(true)
        setStartValue(value)
    }
    const addMaxValue = (value: number) => {
        setChangingParameters(true)
        setMaxValue(value)
    }
    const setParameters = () => {
        setCounterValue(startValue)
        setSettMode(false)
        setChangingParameters(false)
        localStorage.setItem('StartValue', JSON.stringify(startValue))
        localStorage.setItem('MaxValue', JSON.stringify(maxValue))
    }
    const activateSetMode = () => {
        setSettMode(!settMode)
    }

    useEffect(() => {
        const stringStartValue = localStorage.getItem('StartValue')
        const stringMaxValue = localStorage.getItem('MaxValue')
        if (stringStartValue && stringMaxValue) {
            let newSValue = JSON.parse(stringStartValue)
            let newMValue = JSON.parse(stringMaxValue)
            setStartValue(newSValue)
            setMaxValue(newMValue)
            setCounterValue(newSValue)
        }
    }, [])

    return (
        /* <div className="App">
             <ParametersSetter
                 maxValue={maxValue}
                 startValue={startValue}
                 setParameters={setParameters}
                 setStartValue={addStartValue}
                 setMaxValue={addMaxValue}
                 isError={isError}
                 setError={setError}
             />
             <Counter
                 value={counterValue}
                 incValue={incValue}
                 resetValue={resetValue}
                 maxValue={maxValue}
                 isChangingParameters={isChangingParameters}
                 isError={isError}
             />
         </div>*/
        <div className="App">
            {settMode
                ? <ParametersSetter
                    maxValue={maxValue}
                    startValue={startValue}
                    setParameters={setParameters}
                    setStartValue={addStartValue}
                    setMaxValue={addMaxValue}
                    isError={isError}
                    setError={setError}
                />
                : <Counter
                    value={counterValue}
                    incValue={incValue}
                    resetValue={resetValue}
                    maxValue={maxValue}
                    isChangingParameters={isChangingParameters}
                    isError={isError}
                    settMode={settMode}
                    setSettMode={activateSetMode}
                />
            }
        </div>
    );
}

export default App;
