import * as React from "react";
import {SignUpForm} from "../../components/organisms/SignUpForm";
import logo from "../../assets/images/logo-dark.png";
import {NavLink} from "react-router-dom";
import LogoSignAtom from "../../components/atoms/LogoSignAtom";


export const SignUpPage: React.FC = () => {
    return (
        <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
                <LogoSignAtom to="/" />

                <h4>Sign up</h4>
                <p className="text-muted mb-4">Get your Chatvia account now.</p>
            </div>

            <div className="card">
                <div className="card-body p-4">
                    <div className="p-3">
                        <SignUpForm />
                    </div>
                </div>
            </div>

            <div className="mt-5 text-center">
                <p>Already have an account ? <NavLink to="login" className="fw-medium text-primary"> Signin </NavLink>
                </p>
                <p>©
                    { new Date().getFullYear() } Chatvia.
                </p>
            </div>
        </div>
    )
}
