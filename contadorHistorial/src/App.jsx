import React from 'react'
import './app.css'
import Contador from './componentes/Contador.jsx'

function App() {

  return (
    <>
      <div className='App' style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px'}}>
      <h1>Contador de clicls con historial</h1>
      <Contador />

      </div>
    </>
  )
}

export default App
