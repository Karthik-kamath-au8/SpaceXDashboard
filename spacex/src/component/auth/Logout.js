import React from "react";
import {NavLink, Link} from "react-router-dom";
import {signOut} from "../../redux/actions/authActions";
import {connect} from "react-redux";

const Logout = (props) => {
    console.log(props)
    return (
        <ul className="right">
            <li><Link onClick={props.signOut} to="/signin">Log Out</Link></li>
            {/* <li style={{color:'white'}}>{props.username}</li> */}
        </ul>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps) (Logout);