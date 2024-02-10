// import {Link} from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login =()=>
{
    const [email,setemail]=useState("");
    const [password,setpass]=useState();
    // const [list,setlist]=useState([]);
    const navigate=useNavigate();
    // const history=useNavigate();
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   Axios.post("http://localhost:4000/login", {email, password })
    //     .then((result) => {
    //       setlist([...list]);
    //       navigate('/home'); 
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   }
      const handleClick = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:4000/login", { email, password })
          .then((result) => {
            console.log(result.data)
            // console.log(setlist([...list])) // Assuming setlist is your state updater function
            if (result.data === "User successfully logged in") {
              navigate('/home');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
    
    
    return(
    <div className='row'>
    <div className="d-flex justify-content-center align-items-center min-vh-100 center-form ">
      <div className="col-md-5">
        <form >
          <h2 className="text-center">Login</h2>
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
          <button type="submit" className="  btn btn-success btn-block px-5" onClick={handleClick}>Login</button>
        </form>
        {/* <Link to='/home' className='btn btn-success  border-light px-5'>Login</Link> */}
      </div> 
    </div>
    </div>
    )
}
export default Login;