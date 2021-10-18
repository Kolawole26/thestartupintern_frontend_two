import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function LoginTo() {
        let details = {email, password}
        var result = await axios.post('https://eventful-moments.herokuapp.com/api/v1/users/login/', details);
        console.log(result.request);
        history.push("/")
    }

    const onSubmit= (e) => {
        e.preventDefault();
        LoginTo();
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
                            <Link to="/register"><li>Register</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="content">
                <div className="container">
                    <h3>Please Login to continue</h3>
                    <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <button className="btn">Login</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login
