import React from "react";
import logo from "../../assets/images/logo-dark.png";
import {SignInForm} from "../../components/molecules/SignInForm";

export const SignInPage: React.FC = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="text-center mb-4">
                    <a href="link" className="auth-logo mb-5 d-block">
                        <img src={logo} alt="" height="30" className="logo logo-dark" />
                    </a>
                    <h4>Sign in</h4>
                    <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                </div>
                <div className="card">
                    <div className="card-body p-4">
                        <div className="p-3">
                            <SignInForm />
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <p>Don't have an account ?
                        <a href="auth-register" className="fw-medium text-primary">Signup
                        now
                        </a>
                    </p>
                    <p>© { new Date().getFullYear() } Chatvia
                    </p>
                </div>
            </div>
        </div>
    )
}
