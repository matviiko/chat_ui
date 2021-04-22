import * as React from "react";
import {SignUpForm} from "../../components/organisms/SignUpForm";
import logo from "../../assets/images/logo-dark.png";


export const SignUpPage: React.FC = () => {
    return (
        <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
                <a href="index" className="auth-logo mb-5 d-block">
                        <img src={logo} alt="" height="30" className="logo logo-light"/>
                </a>

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
                <p>Already have an account ? <a href="auth-lo" className="fw-medium text-primary"> Signin </a>
                </p>
                <p>©
                    { new Date().getFullYear() } Chatvia.
                </p>
            </div>
        </div>
    )
}
