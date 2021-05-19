import React from "react";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAuthState} from "../selectors/auth";

export const MainLayout: React.FC = ({children}) => {
    const {isLoggedIn} = useSelector(getAuthState);

    if (!isLoggedIn) {
        return <Redirect to="/" />
    }

    return  (
        <div className="layout-wrapper d-lg-flex">
            {children}
        </div>
    )
};
