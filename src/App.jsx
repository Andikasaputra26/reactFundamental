import './App.css'
import { RouterProvider } from 'react-router-dom';
import { GlobalContext } from './context';
import {router} from './router'

function App() {
  const user = {
    username: 'Andika Saputra, S.Kom'
  }

  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router}/>
        </GlobalContext.Provider>
      </div>
    </>
  )
}

export default App
