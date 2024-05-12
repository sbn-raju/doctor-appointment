import { useState } from 'react'
import Footer from './components/Footer/Footer'


//EVERY ONE USE APP FOR TESTING YOUR COMPONENT

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-400'>JAI SHRI RAM</h1>
      <Footer/>
    </>
  )
}

export default App
