import './App.css'
import { useState, useEffect } from 'react'
import Container from './components/Container'

function App() {
  const [screen, setScreen] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <>
      <Container screen={screen} />
    </>
  )
}

export default App
