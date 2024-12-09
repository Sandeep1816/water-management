import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  
    const [number, setNumber]= useState()
    const [password, setPassword]= useState()
    const navigate = useNavigate()
    

    const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:3000/login', { number,password})

      .then(result =>{
         console.log(result)
         if(result.data === 'Success'){
          navigate('/home')
         }
    })

      .catch(err=> console.log(err))

  }


  return (
    <>
    <h1>LogIn</h1>

<form  onSubmit={handleSubmit}>




 <label htmlFor="mobileno"></label>
 <input type="text" placeholder=' Enter Mobile Number' onChange={(e)=> setNumber(e.target.value)}/>


 <label htmlFor="password"></label>
 <input type="text" placeholder=' Enter Password' onChange={(e)=> setPassword(e.target.value)}/>


 <button>Signin</button>
</form>
    
    
    </>
  )
}

export default Login