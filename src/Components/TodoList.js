import React from 'react';
import '../styles/TodoList.css';
import {Link} from 'react-router-dom'

function TodoList({myTodo}) {
    return (
        <div className="wrapper">
            <h2 >My Todo</h2>
            <div className="display-grid">
                <div className="box">
                    <p className="date">{myTodo.futureDate}</p>
                    <h3>{myTodo.title}</h3>
                    <p className="details">{myTodo.details}</p>
                    <Link to="/singleTodo"><button>Complete</button></Link>
                </div>
                <div className="box">
                    <p className="date">{myTodo.futureDate}</p>
                    <h3>{myTodo.title}</h3>
                    <p className="details">{myTodo.details}</p>
                    <Link to="/singleTodo"><button>Complete</button></Link>
                </div>
                <div className="box">
                    <p className="date">{myTodo.futureDate}</p>
                    <h3>{myTodo.title}</h3>
                    <p className="details">{myTodo.details}</p>
                    <Link to="/singleTodo"><button>Complete</button></Link>
                </div>
                <div className="box">
                    <p className="date">{myTodo.futureDate}</p>
                    <h3>{myTodo.title}</h3>
                    <p className="details">{myTodo.details}</p>
                    <Link to="/singleTodo"><button>Complete</button></Link>
                </div>
                <div className="box">
                    <p className="date">{myTodo.futureDate}</p>
                    <h3>{myTodo.title}</h3>
                    <p className="details">{myTodo.details}</p>
                    
                </div>
                <div className="box">
                    <p className="date">{myTodo.futureDate}</p>
                    <h3>{myTodo.title}</h3>
                    <p className="details">{myTodo.details}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default TodoList
