/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

// component tambahan
import CNavBar from "./components/cnavbar";

// pages
import ListData from "./pages/listdata";
import LisJsonOnlinetData from "./pages/listjsononlinedata";
import AddData from "./pages/adddata";
import EditData from "./pages/editdata";

// multiple layout
// https://medium.com/@benkissi/creating-multiple-layouts-in-react-react-router-v5-cebde25ff6e6

// react dengan parameter
// https://scotch.io/courses/using-react-router-4/route-params

function App() {
    return (
        <Container>
            <CNavBar />
            <br />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/list" />
                    </Route>

                    <Route path="/listonline" component={LisJsonOnlinetData} />
                    <Route path="/list" component={ListData} />
                    <Route path="/add" component={AddData} />
                    <Route path="/edit/:id" component={EditData} />
                </Switch>
            </Router>
            

        </Container>
    );
}

export default App;
