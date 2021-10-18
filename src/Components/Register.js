import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const history = useHistory();

     async function RegisterNew() {
         let details = {fullname, email, password}
         var result = await axios.post('https://eventful-moments.herokuapp.com/api/v1/users/signup', details);
         console.log(result.request);
         localStorage.setItem("user-info", JSON.stringify(result));
         history.push("/login");
         
     }

     const onSubmit= (e) => {
         e.preventDefault();
         RegisterNew();
      }

    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                        <Link to="/"><h1>myTODO</h1></Link> 
                        </div> 
                        <ul>
                            <Link to="/login"><li>Login</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="content">
                <div className="container">
                    <h3>Please Register to continue</h3>
                    <form onSubmit={onSubmit}>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    
                    
                    <button className="btn">Register</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register
