import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCounter] = useState(0);

  const minus10 = () => {
    setCounter(count - 10);
  }

  const minus1 = () => {
    setCounter(count - 1);
  }

  const reset = () => {
    setCounter(0);
  }

  const plus1 = () => {
    setCounter(count + 1);
  }

  const plus10 = () => {
    setCounter(count + 10);
  }


  return (
    <>

      <div id='wrap'>
        <div className='inner'>
          <h1>Simple Counter</h1>
          <p className='number'>{count}</p>
          <div className='btn'>
            <button type='button' onClick={minus10}>-10</button>
            <button type='button' onClick={minus1}>-1</button>
            <button type='button' className='reset' onClick={reset}>RESET</button>
            <button type='button' onClick={plus1}>+1</button>
            <button type='button' onClick={plus10}>+10</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
