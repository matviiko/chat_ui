import {InputWithLabel} from "../atoms/InputWithLabel";
import {CheckboxWithLabel} from "../atoms/CheckboxWithLabel";
import React, {useState} from "react";

export const SignInForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(username, password);
        setUsername('');
        setPassword('');
    }


    return (
        <form onSubmit={onSubmit}>
            <InputWithLabel
                value={username}
                placeholder="Enter Username"
                icon="ri-user-2-line"
                label="Username"
                output={(value) => setUsername(value)} />
            <InputWithLabel
                value={password}
                type="password"
                placeholder="Enter Password"
                icon="ri-lock-2-line"
                label="Password"
                classContainer="mb-4"
                output={(value) => setPassword(value)}
            >
                <div className="float-end">
                    <a href="auth-recover" className="text-muted font-size-13">Forgot
                        password?
                    </a>
                </div>
            </InputWithLabel>
            <CheckboxWithLabel label="Remember me" output={value => console.log(value)}/>
            <div className="d-grid">
                <button className="btn btn-primary waves-effect waves-light" type="submit">Sign in
                </button>
            </div>
        </form>
    )
}
