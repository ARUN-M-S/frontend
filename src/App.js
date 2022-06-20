
import './App.css';
import Header from "./component/layout/Header/Header.js"
 import {BrowserRouter as Router, Route,Routes }from "react-router-dom"
 import React  from 'react';
 import WebFont from "webfontloader"
 import Home from "./component/Home/Home"
 import Login from "./component/User/Login/Login"
 import Register from "./component/User/Signup/Signup"
 import AdminHome from './component/Admin/AdminHome';
//  import {ReactNavbar} from "overlay-navbar"
// import React from 'react';
function App() {
  const users = localStorage.getItem("user");
  // const names =JSON.parse(users);
  // const data="heloooooo"
React.useEffect(()=>{
WebFont.load({
  google:{
    families:["Roboto","Droid Sans","Chilanka"] 
  } 
})
},[])



  return (
<Router>
<Header title="hello"/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/login" element={users ? <Home/> :<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/logout" element={<Home/>}/>
<Route path="/admin" element={<AdminHome/>}/>
{/* <Route path="/products"/> */}


</Routes>


</Router>

 
  );
}

export default App;
