import React from 'react';
import {NavLink} from "react-router-dom";

import logo from "../../assets/images/logo-dark.png";

interface Props {
    to: string;
}


const LogoSignAtom: React.FC<Props> = props => {
    return (
        <NavLink to={props.to} className="auth-logo mb-5 d-block">
            <img src={logo} alt="" height="30"/>
        </NavLink>
    );
};

export default LogoSignAtom;
