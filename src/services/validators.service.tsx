import validator from "validator";
import * as React from "react";

export function required(value: string,
                                 template: JSX.Element = <div className="alert alert-danger" role="alert">
                                                        This field is required!
                                                            </div>
) {
    if (!value) {
        return (
            template
        );
    }
}

export const validEmail = (value: string,
                    template: JSX.Element = <div className="alert alert-danger" role="alert">
                        This is not a valid email.
                    </div>

) => {
    if (value.trim()) {
        if (!validator.isEmail(value)) {
            return (
                template
            );
        }
    }
};

export const vusername = (value: string,
                   template: JSX.Element = <div className="alert alert-danger" role="alert">
                       The username must be between 3 and 20 characters.
                   </div>
) => {
    if (value.trim() && (value.length < 3 || value.length > 20)) {
        return (
            template
    );
    }
};

export const vpassword = (value: string,
                   template: JSX.Element = <div className="alert alert-danger" role="alert">
                       The password must be between 6 and 40 characters.
                   </div>
) => {
    if (value.trim() && (value.length < 6 || value.length > 40)) {
        return (
            template
        );
    }
};
