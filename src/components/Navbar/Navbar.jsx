import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Wrapper } from './navbar.styles'

const Navbar = () => {
  const {
    authDetails: { isAuth },
  } = useSelector((store) => store)

  return (
    <Wrapper>
      <Link to="/login">
        {!isAuth && <button className="loginBtn">Login</button>}
      </Link>
      <Link to="/">
        <button className="dashboardbtn">Dashboard</button>
      </Link>
      <Link to="/addTask">
        <button>Add Task</button>
      </Link>
    </Wrapper>
  )
}

export default Navbar
