import * as React from "react";
import {InputWithLabel} from "../atoms/InputWithLabel";
import {useState} from "react";

export const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setUsername('');
        setPassword('');
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(email, username, password);
        resetForm();
    }

    return (
        <form onSubmit={onSubmit}>
            <InputWithLabel
                value={email}
                placeholder="Enter Email"
                icon="ri-mail-line"
                label="Email"
                output={(value) => setEmail(value)}
            />

            <InputWithLabel
                value={username}
                placeholder="Enter Username"
                icon="ri-user-2-line"
                label="Username"
                output={(value) => setUsername(value)}
            />

            <InputWithLabel
                value={password}
                placeholder="Enter Password"
                icon="ri-lock-2-line"
                label="Password"
                output={(value => setPassword(value))}
                classContainer="mb-4"
                type="password"
            />

            <div className="d-grid">
                <button className="btn btn-primary waves-effect waves-light" type="submit">
                    Sign up
                </button>
            </div>
        </form>
    )
}
