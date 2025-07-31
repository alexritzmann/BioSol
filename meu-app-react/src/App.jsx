
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>CLÍNICA DE BIORRESONÂNCIA</h3>
      <h1>Bio Sol</h1>
      <h3>MEDICINA INTEGRATIVA</h3>
      <h3>MEDICINA À CHINESA</h3>
      <div className="card">
        <button>EM BREVE</button>
      </div>
    </>
  )
}

export default App
