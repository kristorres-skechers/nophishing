import React from "react";

import FlexBox from "./FlexBox.js";
import SignIn from "./views/SignIn.js";

function HelloWorld() {
    return (
        <FlexBox
            component="main"
            level={1}
            justifyContent="flex-start"
            alignItems="center"
            className="mdc-theme--background hello-world"
        >
            <SignIn/>
        </FlexBox>
    );
}

export default HelloWorld;
