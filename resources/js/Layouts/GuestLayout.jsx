import React from "react";
import "./nav.css";

const GuestLayout = ({ children }) => {
    return (
        <div>
            <div className="layout-top-header">
                <div style={{ color: "white" }}>
                    <h1>Header</h1>
                </div>
            </div>
            <div className="layout-content-contaier">{children}</div>
            <div className="layout-footer-item">
                <div style={{ color: "white" }}>
                    <h1>Footer</h1>
                </div>
            </div>
        </div>
    );
};

export default GuestLayout;
