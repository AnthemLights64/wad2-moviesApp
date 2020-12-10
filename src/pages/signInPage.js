import React from "react";
import SignIn from '../components/signIn'
import {withRouter} from "react-router-dom"

const SignInPage = props => {
    return <SignIn history={props.history}/>
};

export default withRouter(SignInPage);