import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useArray, useObjectsArray } from './lib/index'

type User = {
  name: string,
}

function App() {
  const array = useArray([ 'a', 'b', 'c'])
  const users = useObjectsArray<User>([ {'name': "Jack" }, {'name': "Melany" }, {'name': 'Conor' }])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ul className="card">
        {array.state.map((item, index) => <li onClick={() => array.remove(index)} key={index}>{item}</li>)}
      </ul>
      <ul className="card">
        {users.state.map((item, index) => <li onClick={() => users.remove(index)} key={index}>{item.name}</li>)}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App