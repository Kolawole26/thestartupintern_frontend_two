import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'; 
import TodoList from './TodoList';

// axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJfaWQiOiI2MTY4NDAwYmJlYWFhZWUyNDE1MWM1OTYiLCJmdWxsbmFtZSI6ImtvbGF3b2xlIiwiZW1haWwiOiJrb2xlbnp5MjZAeWFob28uY29tIn0sImlhdCI6MTYzNDQ5NDM4OX0.SpaX-vjVXxYJb1RvYQNwWvlfN6Us5mudXVkNo2KibJc'

function Home() {
    const [myTodo, setMyTodo] = useState([]);
    
    

    useEffect(() => {
        const fetchTodos = async () => {

            const config = {
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJfaWQiOiI2MTY4NDAwYmJlYWFhZWUyNDE1MWM1OTYiLCJmdWxsbmFtZSI6ImtvbGF3b2xlIiwiZW1haWwiOiJrb2xlbnp5MjZAeWFob28uY29tIn0sImlhdCI6MTYzNDQ5NDM4OX0.SpaX-vjVXxYJb1RvYQNwWvlfN6Us5mudXVkNo2KibJc'
                }
            }
            
            var result = await axios.get('https://eventful-moments.herokuapp.com/api/v1/moment/616c68a7675ce05ffa2e9e0c', config);
            setMyTodo(result.data.data)
            console.log(result.request);
            console.log(result.data.data)
            console.log(localStorage.getItem("user-info"))
        }

        
        fetchTodos();
        
    }, [])

    


    
    
    return (
        <div className="Home">
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
            <TodoList myTodo={myTodo}/>
        </div>
    )
}

export default Home
