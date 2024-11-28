import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name, setName]= useState()
    const [number, setNumber]= useState()
    const [password, setPassword]= useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/register', {name, number,password})

        .then(result => console.log(result))
        .catch(err=> console.log(err))

    }
  return (
   <>
  <form action="" onSubmit={handleSubmit}>

  <label htmlFor="name"></label>
   <input type="text" placeholder=' Enter  Name' onChange={(e)=>setName(e.target.value)}/>


   <label htmlFor="mobileno"></label>
   <input type="text" placeholder=' Enter Mobile Number' onChange={(e)=> setNumber(e.target.value)}/>


   <label htmlFor="password"></label>
   <input type="text" placeholder=' Enter Password' onChange={(e)=> setPassword(e.target.value)}/>


   <button>Register</button>
  </form>
   
   
   
   
   </>
  )
}

export default Signup