import React from 'react'
import Card from 'react-bootstrap/Card';
import './MainCommunityPage.css'
import CommunityHomepage from './CommunityHomepage';
import {Route, useParams,Routes, Navigate} from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
import {Link,Outlet} from 'react-router-dom'
// import {useParams} from 'react-router-dom'
function MainUserPage() {
  const params=useParams()
  const navigate=useNavigate()
//   const params=useParams()
//   const username=params.userID
  const username=params.comID
  console.log(username)
  const home=()=>{
    navigate(`/com-login/${username}/home`)
  }
  const post=()=>{
    navigate(`/com-login/${username}/post`)
  }
  return (
    <div className='UserMain'>
        <div className="UserMainNav">

            <div className="logo"> WeConnect
            </div>
            <div className="dashboard">
                <div className="home" onClick={home}>Home</div>
                {/* <div className="home" onClick={home}>Home </div> */}
                <div className="post" onClick={post}>Post</div>
            </div>
            <div className="profile">{username}</div>
        </div>
        <Outlet/>
        <div className="UserMainSideBar">fff</div>

    </div>
  )
}

export default MainUserPage