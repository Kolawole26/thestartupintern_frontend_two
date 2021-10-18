import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/SingleTodo.css'

function SingleTodo() {
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
                <h2>My Todo - This is a sample title </h2>
                <p className="space">2022-01-24</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus culpa cupiditate doloremque sint ut temporibus iste sequi provident sed explicabo, dolor, dicta maxime alias perferendis deserunt voluptatem ipsam nemo fugit. At accusantium deserunt rem, sint labore consequuntur repellat? Officia id nihil fugiat veritatis qui incidunt aspernatur reiciendis nemo voluptate ipsum eius at perferendis voluptates et corporis, repudiandae autem reprehenderit rerum quos eligendi. Culpa aliquid ex quibusdam pariatur eaque id nulla aperiam dolorum sint! Hic veniam, ipsa dolore voluptas atque reprehenderit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus culpa cupiditate doloremque sint ut temporibus iste sequi provident sed explicabo, dolor, dicta maxime alias perferendis deserunt voluptatem ipsam nemo fugit. At accusantium deserunt rem, sint labore consequuntur repellat? Officia id nihil fugiat veritatis qui incidunt aspernatur reiciendis nemo voluptate ipsum eius at perferendis voluptates et corporis, repudiandae autem reprehenderit rerum quos eligendi. Culpa aliquid ex quibusdam pariatur eaque id nulla aperiam dolorum sint! Hic veniam, ipsa dolore voluptas atque reprehenderit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus culpa cupiditate doloremque sint ut temporibus iste sequi provident sed explicabo, dolor, dicta maxime alias perferendis deserunt voluptatem ipsam nemo fugit. At accusantium deserunt rem, sint labore consequuntur repellat? Officia id nihil fugiat veritatis qui incidunt aspernatur reiciendis nemo voluptate ipsum eius at perferendis voluptates et corporis, repudiandae autem reprehenderit rerum quos eligendi. Culpa aliquid ex quibusdam pariatur eaque id nulla aperiam dolorum sint! Hic veniam, ipsa dolore voluptas atque reprehenderit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus culpa cupiditate doloremque sint ut temporibus iste sequi provident sed explicabo, dolor, dicta maxime alias perferendis deserunt voluptatem ipsam nemo fugit. At accusantium deserunt rem, sint labore consequuntur repellat? Officia id nihil fugiat veritatis qui incidunt aspernatur reiciendis nemo voluptate ipsum eius at perferendis voluptates et corporis, repudiandae autem reprehenderit rerum quos eligendi. Culpa aliquid ex quibusdam pariatur eaque id nulla aperiam dolorum sint! Hic veniam, ipsa dolore voluptas atque reprehenderit.</p>

            </div>
            </section>
        </div>
    )
}

export default SingleTodo
