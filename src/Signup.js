import {Link} from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup=()=>
{
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpass]=useState();
    // const [list,setlist]=useState([]);
    const navigate=useNavigate();

    const handleClick = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:4000/signup", { name, email, password })
        .then((result) => {
          // setlist([...list]);
          navigate('/login'); 
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return(
    <div className='row'>
    <div className="d-flex justify-content-center align-items-center min-vh-100 center-form ">
      <div className="col-md-5">
        <form  >
          <h2 className="text-center">Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" 
            placeholder="Enter your username"
            onChange={(e)=>setname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email"
             placeholder="Enter your email" 
             onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"
             placeholder="Enter your password"
             onChange={(e)=>setpass(e.target.value)} />
          </div>
          <br></br>
          <button type="submit" className=" btn btn-success btn-block px-5" onClick={handleClick}>Sign Up</button>
        </form>
        {/* <p className='text-center'>Already have an account created....</p> */}
        <Link to='/login' className=' btn btn-success btn-block  px-5'>Login </Link>
      </div> 
    </div>
        </div>
   
    )
}

export default Signup;