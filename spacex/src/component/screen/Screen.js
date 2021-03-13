import React from 'react';
import Dashboard from './Dashboard';
import { withRouter } from "react-router";


function Screen(props) {
    return(
    <Dashboard props={props}/>
    )
}
export default withRouter(Screen);