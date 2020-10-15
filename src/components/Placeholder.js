import React from "react";

import FlexBox from "./FlexBox.js";

const spinnerURL = "<PUBLIC DIRECTORY>images/spinner.gif";

function Placeholder() {
    return (
        <FlexBox
            component="main"
            level={1}
            justifyContent="center"
            alignItems="center"
            className="mdc-theme--surface"
        >
            <img src={spinnerURL} width="80"/>
            <p className="mdc-typography--body1 mdc-theme--primary">
                Signing In
            </p>
        </FlexBox>
    );
}

export default Placeholder;
