import React from 'react'
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './LandingPage.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import svg from '../../assist/background.svg'
import "./CommunityLogin.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function CommunityLogin() {
    const Navigate=useNavigate()
    const [details,setdetails]=useState({
        community_name:'',
        community_type:'',
        address:'',
        password:'',
        conpass:''
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
const changeconpass=(e)=>{
    setdetails({...details,conpass:e.target.value})

}

const submit =async (e)=>{
    e.preventDefault();
    if(details.community_name==''||details.community_type==''||details.address==''||details.password=='')
    {
        alert("Please enter all entries")
    }
    else{
        if(details.password!=details.conpass)
        {
            alert("Enter correct confirm password")
        }
        else{

       

    
    console.log(details);
    // e.preventDefault();
    const res= await fetch(
`https://hacked-e6f56-default-rtdb.firebaseio.com/Community/${details.community_name}.json`,{
method:"PUT",
headers:{
    'Content-Type':"application/json",
},
body:
    JSON.stringify({

        community_name:details.community_name,
        community_type:details.community_type,
        address:details.address,
        password:details.password
    })

}

    );
     fetch("https://hacked-e6f56-default-rtdb.firebaseio.com/Community.json").then((response)=>{
        return response.json()
     }).then(data=>{
        console.log(data)
     })
    Navigate(-1)
}
    }
}
  return (
    <div className='cl-form'>    
    <h2>Register Community</h2>
          <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Community Name</Form.Label>
      <br />
      <input type="text" placeholder="Enter Community Name" value={details.community_name} name={details.community_name} onChange={changename}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Community Type</Form.Label>
      <br />
      <input type="text" placeholder="Enter Community Type" value={details.community_type} name={details.community_type} onChange={changetype}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Office Address/Community Address(This address  can be used for verification)</Form.Label>
     <br /> <input type="text" placeholder="Enter Address" value={details.address} name={details.address} onChange={changeaddress}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <br />
      <input type="password" placeholder="Password" value={details.password} name={details.password} onChange={changepass}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <br />
      <input type="password" placeholder="Password" value={details.conpass} onChange={changeconpass}/>
    </Form.Group>
    <Link to="/com-sigin"></Link>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <input className='check' type="checkbox" />
        <label  htmlFor="">Agree to Terms & Conditions</label>
    </Form.Group>
    <Button className="submit-btn"type="submit" onClick={submit}>
      Submit
    </Button>
  </Form></div>
  )
}

export default CommunityLogin