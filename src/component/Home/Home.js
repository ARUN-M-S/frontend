import React, { Fragment } from 'react'
import "./Home.css"

function Home(props) {
  const users = localStorage.getItem("user");
  const names =JSON.parse(users);

  const logouted=()=>{
    localStorage.removeItem("user");
    window.location="/"
  }
  // const userName=names.user.name
  return (
  <Fragment>
      <div className="banner">
        
          <h1>Welcome To Home {names? names.user.name : ""}</h1>
          <h1>Week 16 User Authentication</h1>

          { users &&  <button onClick={logouted} className='logoutBtn'>Logout</button>}

      </div>


  </Fragment>
  )
}

export default Home;
