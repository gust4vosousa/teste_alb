import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Components/Menu' // Importa o componente Menu
import Feed from './Components/Feed' // Importa o componente Feed
import Barra from './Components/Barra' // Importa o componente Barra
import { getPost } from './APIs/post';

const App = () => {

    getPost(1)

    return(
    <Router>
        <Menu/>
        <Barra/>

        <Switch>
            <Route path='/' exact>
                <Feed/>
            </Route>

            <Route path='*'>
                <h1>Not found</h1>
            </Route>
        </Switch>
    </Router>
    )
}

export default App