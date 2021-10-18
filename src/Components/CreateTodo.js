import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../styles/CreateTodo.css'
import axios from 'axios';

function CreateTodo() {
    
    const [futureDate, setFutureDate] = useState("");
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const history = useHistory();

     async function NewDetails() {

        const config = {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJfaWQiOiI2MTY4NDAwYmJlYWFhZWUyNDE1MWM1OTYiLCJmdWxsbmFtZSI6ImtvbGF3b2xlIiwiZW1haWwiOiJrb2xlbnp5MjZAeWFob28uY29tIn0sImlhdCI6MTYzNDQ5NDM4OX0.SpaX-vjVXxYJb1RvYQNwWvlfN6Us5mudXVkNo2KibJc'
            }
        }

         let MyDetails = {title, details, futureDate}
         var result = await axios.post('https://eventful-moments.herokuapp.com/api/v1/moment', MyDetails, config);
         console.log(result.request);
         history.push("/")
     }

     const onSubmit= (e) => {
         e.preventDefault();
         NewDetails();
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
                            <Link to="/login"><li>Logout</li></Link>
                            <Link to="/createTodo"><li>Create Todo</li></Link>
                            <Link to="/myTodo"><li>My Todos</li></Link> 
                        </ul>
                    </nav>
                </div>
            </header>
            <section>
            <div className="wrapper">
                <h2>Create Todo</h2>

                <form className="form" onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="text" name="date" value={futureDate} onChange={(e) => setFutureDate(e.target.value)} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                    </div>
                        <div className="form-group-1">
                            <label htmlFor="todo">Todo Details</label>
                            <textarea name="todo" type="text"  cols="185" rows="10" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                        </div>
                    
                    <button className="btn">Save</button>
                    </form>
            </div>
            </section>
        </div>
    )
}

export default CreateTodo
