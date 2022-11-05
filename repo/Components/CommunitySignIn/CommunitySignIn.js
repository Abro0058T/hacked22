import React from 'react'
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CommunityLogin from '../CommunityLogin/CommunityLogin';
import { Route,Routes, useNavigation } from 'react-router-dom';
// import './LandingPage.css'
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import svg from '../../assist/background.svg'
import "./CommunitySignIn.css"
function CommunitySignIn() {
    const navigate=useNavigate()
    const [details,setdetails]=useState({
        community_name:'',
        password:''
 })
 const changename=(e)=>{
    setdetails({...details,community_name:e.target.value})

 }
 const changetype=(e)=>{
    setdetails({...details,community_type:e.target.value})

}
const changeaddress=(e)=>{
    setdetails({...details,address:e.target.value})

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
        const data= await fetch("https://hacked-e6f56-default-rtdb.firebaseio.com/Community.json").then((response)=>{
            return response.json()
        }).then(data=>{
            return data
        })
        const key =Object.keys(data)
        console.log(key)

        if(key.includes(details.community_name)){
            const value=Object.values(data)
            const index=key.indexOf(details.community_name)
            if(value[index].password==details.password)
            {
                // alert("correct passs")
                navigate(`/com-login/${details.community_name}/home`)

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
    <div className="background">
    <div className="com-left">
        <div className="right-img"></div>
    </div>
    <div className='cs-form'>    
    <h2>Community LogIn</h2>
          <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>CommunityName</Form.Label>
      <br />
      <input type="text" placeholder="Enter Name" value={details.community_name} name={details.community_name} onChange={changename}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <br />
      <input type="password" placeholder="Password" value={details.password} name={details.password} onChange={changepass}/>
    </Form.Group>
    <Link to="/com-signin" className='link'>Don't have an account? Create one!</Link>
    <br/>
    <Button type="submit" onClick={submit}>
      Login
    </Button>
  </Form></div>
  <div className="com-right">
  <div className="left-img"></div>
  </div>

    </div>
  )
}

export default CommunitySignIn;