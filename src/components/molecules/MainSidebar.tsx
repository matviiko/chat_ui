import * as React from "react";
import logo from "../../assets/images/logo.svg"
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../actions/auth";

export const MainSidebar: React.FC = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout())
        return <Redirect to="/" />
    };
    return (
        <div className="side-menu flex-lg-column me-lg-1 ms-lg-0">
            {/*Logo*/}
            <div className="navbar-brand-box">
                <NavLink to="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src={logo} alt="" height="30"/>
                        </span>
                </NavLink>
            </div>
            {/*end navbar-brand-box*/}

            {/*Start side-menu nav*/}
            <div className="flex-lg-column my-auto">
                <ul className="nav nav-pills side-menu-nav justify-content-center">
                    <li className="nav-item" >
                        <NavLink to="/home" className="nav-link active"
                                 // activeClassName="active"
                                 title="Profile">
                            <i className="ri-user-2-line"/>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link"
                                 // activeClassName="active"
                                 title="Chats">
                            <i className="ri-message-3-line"/>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                                 title="Logout"
                                 onClick={logoutHandler}>
                            <i className="ri-logout-circle-r-line" />
                        </a>
                    </li>
                </ul>
            </div>
            {/*end side-menu nav*/}

            {/*<div className="flex-lg-column d-none d-lg-block">*/}
            {/*    <ul className="nav side-menu-nav justify-content-center">*/}
            {/*        <li className="nav-item btn-group dropup profile-user-dropdown">*/}
            {/*            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
            {/*               aria-haspopup="true" aria-expanded="false">*/}
            {/*                <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />*/}
            {/*            </a>*/}
            {/*            <div className="dropdown-menu">*/}
            {/*                <a className="dropdown-item" href="#">Profile <i*/}
            {/*                    className="ri-profile-line float-end text-muted"></i></a>*/}
            {/*                <a className="dropdown-item" href="#">Setting <i*/}
            {/*                    className="ri-settings-3-line float-end text-muted"></i></a>*/}
            {/*                <div className="dropdown-divider"></div>*/}
            {/*                <a className="dropdown-item" href="#">Log out <i*/}
            {/*                    className="ri-logout-circle-r-line float-end text-muted"></i></a>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*Side menu user*/}
        </div>
    )
}
