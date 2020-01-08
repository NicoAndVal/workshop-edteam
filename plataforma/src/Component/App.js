import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Protected from './Route/Protected';
import Especialitys from './Pages/Especialitys'
import Especiality from './Pages/Especiality'
import Courses  from './Pages/Courses'
import Course from './Pages/Course'
import Teachers from './Pages/Teachers'
import Fragment from './Pages/Fragment'
import Page404 from './Pages/Page404'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Public from './Route/Public';
import Header from './Organism/Header';


const App = () =>(
  <Router>

    <Header/>
    <Switch>
      <Protected path='/' exact component={Home}/>
      <Protected path='/especialidades' exact component={Especialitys}/>
      <Protected path='/especialidad/:id' component={Especiality}/>
      <Protected path='/cursos' exact component={Courses}/>
      <Protected path='/cursos/:id' exact component={Course}/>
      <Protected path='/profesores' exact component={Teachers}/>
      <Protected path='/clase/:id' exact component={Fragment}/>

      <Public path = '/login' component={Login}/>
      <Public path = '/registro' component={Register}/>

      <Route component={Page404} />
    </Switch>
  </Router>
)


export default App;
