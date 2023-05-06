import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useArray, useObjectsArray } from '../lib/index'
import Example from './example'
import ExampleTwo from './exampleTwo'

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
      <h1>Examples:</h1>
      <Example />
      <ExampleTwo />
    </div>
  )
}

export default App