import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className='text-center'>
    <br></br>
            <div>
                <h1>News App</h1>
            <h3>
            <br/>
            <br/>
            <br/>
                <Link to="/signup">Signup</Link>
                <br/>    
            </h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <h6>Have An Acoount.</h6>
            <h3>
            <Link to="/signin">Signin</Link>
            <br/>
            </h3>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            <h2>Signup / Signin Please</h2>
    </div>
  )
}

export default Home
