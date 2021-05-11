import {InputWithLabel} from "../atoms/InputWithLabel";
import {CheckboxWithLabel} from "../atoms/CheckboxWithLabel";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../reducers";
import {required, vpassword, vusername} from "../../services/validators.service";
import {login} from "../../actions/auth";
import { Redirect, RouteComponentProps, useHistory } from "react-router-dom";


export const SignInForm: React.FC<RouteComponentProps> = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state: RootStore) => state.authState);
    const { message } = useSelector((state: RootStore) => state.messageState)
    const dispatch = useDispatch();
    const history = useHistory()

    const isDisabled = (): boolean => {
        return (!!required(username) || !!required(password) || !!vusername(username) || !!vpassword(password));
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setLoading(true);
        dispatch(login(username, password))
            .then(() => {
                history.push("/home");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });


        setUsername('');
        setPassword('');
    }

    if (isLoggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <form onSubmit={onSubmit}>
            {message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                </div>
            )}

            <InputWithLabel
                value={username}
                placeholder="Enter Username"
                icon="ri-user-2-line"
                label="Username"
                output={(value) => setUsername(value)} />
            {vusername(username)}

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
            {vpassword(password)}

            <CheckboxWithLabel label="Remember me" output={value => console.log(value)}/>
            <div className="d-grid">
                <button disabled={isDisabled() || loading} className="btn btn-primary waves-effect waves-light" type="submit">
                    {loading && (
                        <span className="spinner-border spinner-border-sm"/>
                    )}
                    Sign in
                </button>
            </div>
        </form>
    )
}
