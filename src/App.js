import './App.css';
import NavBar from './WebPage/NavBar'
import Home from './WebPage/Home'
import About from './WebPage/About'
import BallGame from './Game/index'
import { Route, Switch } from 'react-router-dom'




function App() {

  return (

   <div>
    <NavBar/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route path='/ballgame'><BallGame/></Route>
      {/* <Route path='/about'><About/></Route> */}
      {/* <Route path='/chess'><Chess/></Route> */}
    </Switch>
   </div>
   )
  }
export default App;
