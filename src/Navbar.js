import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DataFetching from "./DataFetching";
import Edit from './Edit';
import Filter from './Filter';

function Navbar() {
    return (
        <Router>
            <div>
            <nav>
                <ul>
                <li>
                    <Link to="/datafetching">Data</Link>
                </li>
                <li>
                    <Link to="/edit">Edit</Link>
                </li>
                <li>
                    <Link to="/filter">Filter</Link>
                </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/datafetching">
                <DataFetching />
                </Route>
                <Route path="/edit">
                <Edit />
                </Route>
                <Route path="/filter">
                <Filter />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default Navbar;
