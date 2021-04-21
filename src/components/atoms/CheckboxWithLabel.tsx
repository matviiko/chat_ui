import * as React from "react";
import {ChangeEvent, useState} from "react";

interface ICheckboxWithLabel {
    type?: string;
    label: string;
    output(value: boolean): void;
}

export const CheckboxWithLabel: React.FC<ICheckboxWithLabel> = (props) => {

    const { type = 'checkbox', label, output} = props;
    const [checked, setChecked] = useState(false);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        output(event.target.checked)
    };
    return (
        <div className="form-check mb-4">
            <input {...{type, checked, onChange}}  className="form-check-input" id={'check' + label}/>
            <label className="form-check-label" htmlFor={'check' + label}>{label}</label>
        </div>
    )
}
