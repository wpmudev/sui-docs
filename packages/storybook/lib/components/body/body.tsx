import React from "react";

// Import required styles.
import "./body.scss";

// Build "body" component.
const Body = ({ children, ...args }) => {
    return (
        <div className="csb-body" { ...args }>
            { children }
        </div>
    );
}

export default Body;
