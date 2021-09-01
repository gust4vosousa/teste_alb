import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './Components/Menu/Menu'
import Feed from './Components/Feed/Feed'
import Header from './Components/Header/Header'
import { getPost } from './APIs/post';
import NotFound from './Components/NotFound/NotFound';
import AddPost from './Components/AddPost/AddPost';

const App = () => {

    getPost(1)

    return(
    <Router>
        <Header/>
        <Menu/>

        <Switch>
            <Route path='/' exact>
                <AddPost/>
                <Feed/>
            </Route>

            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
    </Router>
    )
}

export default App