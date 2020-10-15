import React from "react";

import FlexBox from "../FlexBox.js";
import Footer from "../Footer.js";
import SignIn from "../views/SignIn.js";

function HelloWorld() {
    return (
        <React.Fragment>
            <FlexBox
                component="main"
                level={1}
                justifyContent="flex-start"
                alignItems="center"
                className="mdc-theme--background hello-world"
            >
                <SignIn/>
            </FlexBox>
            <Footer/>
        </React.Fragment>
    );
}

export default HelloWorld;
