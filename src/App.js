import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ListPosts from "./ListPosts/ListPosts";
import Header from "./Header/Header";
import UserPage from "./UserPage/UserPage";
export function App() {
    return (
        <Router>
           <Header/>
            <Switch>
                <Route path="/posts">
                    <ListPosts/>
                </Route>
                <Route path="/users/:id">
                  <UserPage/>
                </Route>
                <Route path="">
                    <div>Sorry - that page doesn't exist, try these:</div>
                    <Link to="/posts"/>
                    <Link to="/users"/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
