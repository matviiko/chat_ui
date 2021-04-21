import React from "react";

export const EnterLayout: React.FC = ({children}) => {
    return  (
        <div className="my-5 pt-sm-5">
            <div className="container">
                {children}
            </div>
        </div>
    )
};
