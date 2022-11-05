import React from 'react'
import Card from 'react-bootstrap/Card';
import './MainCommunityPage.css'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import './CommunityHomepage.css'
function CommunityHomepage() {
    const [Data,setdata]=useState({})
    const [toggle,changetoggle]=useState(false)
    const params=useParams()
    const username=params.comID
  useEffect(
    ()=>{

      const data=  fetch(`https://hacked-e6f56-default-rtdb.firebaseio.com/Community/${username}/content.json`).then((response)=>{
          return response.json()
      }).then(data=>{
        console.log(data)
        setdata(data)
        console.log(data)
        return data
        // setdata(data)
      })
    },[])
    const name=["ger",'agreg','aeherh']
    console.log(Object.values(Data))
const person=
  <div>
    {
      Object.values(Data).map(key=>{
        return <h2>
          <Card style={{ width: '18rem',height:'14rem' }}>
 <Card.Body>
   <Card.Title>{key.heading}</Card.Title>
   <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
   <Card.Text>
     {key.post}
   </Card.Text>
   <Card.Link href="#">{key.tags}</Card.Link>
   <Card.Link href="#">Another Link</Card.Link>
 </Card.Body>
</Card>
        </h2>
      })
    }
  </div>
  setTimeout(() => {
    changetoggle(true)
  },500);



  return (

    <div className="UserMainContent">   
 {toggle?person:<div>hi</div>}
    {/* <Card style={{ width: '18rem',height:'14rem' }}>
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Card.Link href="#">Card Link</Card.Link>
   <Card.Link href="#">Another Link</Card.Link>
 </Card.Body>
</Card> */}
</div>
  )
}

export default CommunityHomepage