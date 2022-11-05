import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/Test';
import LandingPage from './Components/Landingpage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import MainUserPage from './Components/MainUserPage/MainUserPage';
import CommunitySignIn from './Components/CommunitySignIn/CommunitySignIn';
import Login from './Components/Login/Login';
import CommunityLogin from './Components/CommunityLogin/CommunityLogin';
import USerSignIn from './Components/UserSignIn/UserSignIn';
import MainCommunityPage from './Components/MainCommunityPage/MainCommunityPage';
import CommunityHomepage from './Components/MainCommunityPage/CommunityHomepage';
import CommunityPostPage from './Components/MainCommunityPage/CommunityPostPage';

function App() {
  return (
    <>
{/* <Test/> */}
<div className="app">
<Routes>
  <Route path="/" element={<LandingPage/>}/>
<Route path="/com-login" element={<CommunitySignIn/>}/>
<Route path="/com-signin" element={<CommunityLogin/>}/>
<Route path="/us-login" element={<Login/>}/>
<Route path="/us-signin" element={<USerSignIn/>}/>
<Route path="/user/:userID" element={<MainUserPage/>}/>
<Route path='/com-login/:comID' element={<MainCommunityPage/>}>
  <Route path='home'element={  <CommunityHomepage/>}/>
  <Route path='post' element={<CommunityPostPage/>}/>
  </Route>
              {/* <Route path='/com-login/'/> */}
</Routes>

{/* <MainCommunityPage/> */}
{/* <CommunityPostPage/> */}
</div>

    </>
  );
}

export default App;
