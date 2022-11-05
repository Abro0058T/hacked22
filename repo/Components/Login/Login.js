import React from 'react'
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'
// import './LandingPage.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useNavigate } from 'react-router-dom';
import svg from '../../assist/background.svg'
import "./Login.css"
function Login() {
    const navigate=useNavigate()
    const [details,setdetails]=useState({
        user_name:'',
        password:''
 })
 const changename=(e)=>{
    setdetails({...details,user_name:e.target.value})

 }
const changepass=(e)=>{
    setdetails({...details,password:e.target.value})

}

const submit =async (e)=>{
    e.preventDefault();
    if(details.community_name==''||details.password=='')
    {
        alert("Please fill the entries")
    }
    else{

        console.log(details);
        // e.preventDefault();
        const data= await fetch("https://hacked-e6f56-default-rtdb.firebaseio.com/users.json").then((response)=>{
            return response.json()
        }).then(data=>{
            return data
        })
        const key =Object.keys(data)
        console.log(key)

        if(key.includes(details.user_name)){
            const value=Object.values(data)
            const index=key.indexOf(details.user_name)
            if(value[index].password==details.password)
            {
                navigate(`/user/${details.user_name}`)
            }
            else{
                console.log(value[index])
                alert("wrong pass")
            }
            // if(data[details.community_name].password==details.password)
            // {
            //     alert("same password")
            // }
        }

    }
    
}
  return (
    <div className='ul-form'>    
          <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>UserName</Form.Label>
      <br />
      <input type="text" placeholder="Enter User Name" value={details.user_name} name={details.user_name} onChange={changename}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <br />
      <input type="password" placeholder="Password" value={details.password} name={details.password} onChange={changepass}/>
    </Form.Group>
    <Link to="/us-signin">Don't have an account</Link>
    <Button variant="primary" type="submit" onClick={submit}>
      Login
    </Button>
  </Form></div>
  )
}

export default Login