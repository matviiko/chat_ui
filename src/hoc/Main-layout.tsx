import React from "react";

export const MainLayout: React.FC = ({children}) => {
    return  (
        <div className="layout-wrapper d-lg-flex">
            {children}
        </div>
    )
};
