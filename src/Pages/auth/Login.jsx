import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../styles/Login.css'


const Login = () => {
  const navigate = useNavigate();



  const tohome = () => {
    navigate('/dashboard')
  }


  return (
    <div id='Login' class="container">


      <div id='welcome-div'>

        <div id='logocom'>
          <img src="images/numetry_technologies_logo.jpg" alt="images not found" />

        </div>
        <div id='welcome-quote' className='text-center'>

          <h2>Welcome to  Numetry Technologies  </h2>

        </div>


      </div>
      <div id='form-control-div'>
        <div id='form-control'>

          <p> <h2>Login to Your Dashboard
          </h2>
          </p>

          <form typeof='post'>
          <div id='form-content'>

            <label htmlFor="Select"> Login As</label> <br />
              <select class="form-control">
              <option>Select Role</option>
              <option>App Admin</option>
              <option>Department </option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
            <br />

            <label htmlFor="email">Email :</label> <br />
            <input type="email" name="email" id="user-mail" placeholder='Enter Email' className='userinput' />

            <br />

            <label htmlFor="password"> Password :</label>
            <br />
            <input type="password" name="password" id="user-password" className='userinput' placeholder='Enter Password' />
            <br />

            <input type="checkbox" name="check" id="remember-check" />
            <label htmlFor="check"> Remember me</label>

            <br />
            <div id='btnclass'>
              <button type='submit' id='submitbtn' className='btn btn-success' onClick={tohome}>
                Login</button>
            </div>
            <br />

            <Link href="#" id='Link'>Forgot Password</Link>
            </div>
            
          </form>
        </div>
      </div>


    </div>
  )
}

export default Login