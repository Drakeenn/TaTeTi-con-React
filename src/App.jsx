import { useState } from 'react'
import reactLogo from './assets/react.svg'

import TicTac from './TicTac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TicTac/>

    </div>
  )
}

export default App
