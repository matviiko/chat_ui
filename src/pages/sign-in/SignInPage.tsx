import React from "react";
import {SignInForm} from "../../components/organisms/SignInForm";
import {NavLink} from "react-router-dom";
import LogoSignAtom from "../../components/atoms/LogoSignAtom";

export const SignInPage: React.FC = () => {
    return (
        <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
                <LogoSignAtom to="/" />

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
                    <NavLink to="register" className="fw-medium text-primary">
                        Signup now
                    </NavLink>
                </p>
                <p>© { new Date().getFullYear() } Chatvia
                </p>
            </div>
        </div>
    )
}
