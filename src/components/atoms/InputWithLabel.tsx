import * as React from "react";
import {ChangeEvent} from "react";

interface Props {
    value: string;
    type?: string;
    placeholder: string;
    icon: string;
    label: string;
    classContainer?: string;
    output(value: string): void;
}

export const InputWithLabel: React.FC<Props> = (props) => {
    const {value, type = 'text', placeholder, icon, label, children, classContainer = 'mb-3', output} = props
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        output(event.target.value);
    }

    return (
        <div className={classContainer}>
            {children}
            <label className="form-label">{label}</label>
            <div className="input-group mb-3 bg-soft-light rounded-3">
                <span className="input-group-text text-muted">
                    <i className={icon}/>
                </span>
                <input {...{value, placeholder, type, onChange}} className="form-control form-control-lg border-light bg-soft-light"/>
            </div>
        </div>
    )
};
