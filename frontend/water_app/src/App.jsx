import 'bootstrap'
import './App.css'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './components/Home'

function App() {


  return (
    <>

     <BrowserRouter>
     <Routes>
     <Route element={<Signup/>} path='/'/>
      <Route element={<Signup/>} path='/register'/>
      <Route element={<Login/>} path='/login'/>
      <Route  element={<Home/>} path='/home'/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
