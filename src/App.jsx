import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-800 relative'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App