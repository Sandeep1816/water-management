import 'bootstrap'
import './App.css'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<Signup/>} path='/register'/>
      <Route element={<Login/>} path='/login'/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
