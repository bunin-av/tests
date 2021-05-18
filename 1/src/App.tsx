import React, {useState} from 'react';
import './App.css';
import {Screen} from "./components/Screen/Screen";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel";

function App() {
    const [value, setValue] = useState<number>(0)

    const incValue = () => setValue(value + 1)
    const resetValue = () => setValue(0)


    return (
      <div className="App">
          <div className="container">
              <Screen value={value}/>
              <ButtonPanel incValue={incValue}
                           resetValue={resetValue}
                           value={value}
              />
          </div>
      </div>
    );
}

export default App;
