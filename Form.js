import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = {name, email, age}

    axios.post('http://localhost:3000/userpost', formData)
    
    .then(response =>{
      console.log('Response:', response.data);
      
    })
    .catch(error =>{
      console.error('Error:', error)
    })
  }

   const handleView = ()=>{
    navigate('/get')
   }
  return (
    <div className='mk'>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
      <label>name:</label><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <label>email:</label><br />
      <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)}/><br />
      <label >age:</label><br />
      <input type="text"  value={age} onChange={(e) => setAge(e.target.value)} /><br />
      <button >submit</button>
      <button onClick= {handleView}>view</button>
      </form>
    </div>
  )
}

export default Form
