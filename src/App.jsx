import { useState } from 'react'
import './App.css'
import ProductSection from "./components/ProductSection"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
      </div>
      <div className='body'>
        <h1>Welcome to MaliSafi</h1>
      </div>
      <div className='footer'>
      </div>
      <ProductSection />
    </>
  )
}

export default App
