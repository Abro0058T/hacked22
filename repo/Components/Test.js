import React from 'react'
import { useState, useEffect } from 'react'
// import firebase from '../firebase'

function Test() {
    const [data,setdata]=useState({
        name:'',
        password:''
    })
    const entername=(e)=>{
        setdata({...data,name:e.target.value})
        // console.log(data)
    }
    const enterpass=(e)=>{
        setdata({...data,password:e.target.value})
        // console.log(data)
    }
    const postdata =async (e)=>{
        e.preventDefault();
        const res= await fetch(
`https://hacked-e6f56-default-rtdb.firebaseio.com/Community/${data.name}.json`,{
    method:"PUT",
    headers:{
        'Content-Type':"application/json",
    },
    body:
        JSON.stringify({
            name:data.name,
            password:data.password
        })
    
}
        );
         fetch("https://hacked-e6f56-default-rtdb.firebaseio.com/Community.json").then((response)=>{
            return response.json()
         }).then(data=>{
            console.log(data)
         })
        
    }

  return (
    <div>
        <h1>Data</h1>
        <input type="text" onChange={entername} />
        <input type="text" onChange={enterpass} />
        <button type='submit' onClick={postdata}></button>
    </div>
  )
}

export default Test