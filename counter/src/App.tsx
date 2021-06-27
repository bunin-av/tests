import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {ParametersSetter} from "./components/ParametersSetter/ParametersSetter";
import {useAppSelector} from "./store/hooks";


function App() {
    const selectorSettMode = useAppSelector(state => state.counter.settMode)

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
          {selectorSettMode
            ? <ParametersSetter/>
            : <Counter/>
          }
      </div>
    )
}

export default App;
