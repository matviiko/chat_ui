import * as React from "react";
import {InputWithLabel} from "../atoms/InputWithLabel";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../reducers";
import {register} from "../../actions/auth";
import {required, validEmail, vpassword, vusername} from "../../services/validators.service";



export const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector((state: RootStore) => state.messageState);
    const dispatch = useDispatch();

    const isDisabled = (): boolean => {
        return (!!required(username) || !!required(email) || !!required(password) || !!validEmail(email)
            || !!vusername(username) || !!vpassword(password));
    };

    const resetForm = () => {
        setEmail('');
        setUsername('');
        setPassword('');
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(register(username, email, password))
            .then(() => setSuccessful(true))
            .catch(() => setSuccessful(false))

        resetForm();
    }

    return (
        <form onSubmit={onSubmit}>
            { message && (
                <div className="form-group">
                    <div
                        className={ successful ? "alert alert-success" : "alert alert-danger" }
                        role="alert"
                    >
                        {message}
                    </div>
                </div>
            )}
            <InputWithLabel
                value={email}
                placeholder="Enter Email"
                icon="ri-mail-line"
                label="Email"
                output={(value) => setEmail(value)}
            />
            {validEmail(email)}

            <InputWithLabel
                value={username}
                placeholder="Enter Username"
                icon="ri-user-2-line"
                label="Username"
                output={(value) => setUsername(value)}
            />
            {vusername(username)}

            <InputWithLabel
                value={password}
                placeholder="Enter Password"
                icon="ri-lock-2-line"
                label="Password"
                output={(value => setPassword(value))}
                classContainer="mb-4"
                type="password"
            />
            {vpassword(password)}

            <div className="d-grid">
                <button className="btn btn-primary waves-effect waves-light" type="submit" disabled={isDisabled()}>
                    Sign up
                </button>
            </div>
        </form>
    )
}
