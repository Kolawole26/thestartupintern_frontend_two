import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SingleTodo from './Components/SingleTodo';
import CreateTodo from './Components/CreateTodo';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/createTodo" exact component={CreateTodo}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/singleTodo" exact component={SingleTodo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
