import React from "react";

import FlexBox from "./FlexBox.js";
import Footer from "./Footer.js";
import HelloWorld from "./HelloWorld.js";

function Layout() {
    return (
        <FlexBox style={{minHeight: "100vh"}}>
            <HelloWorld/>
            <Footer/>
        </FlexBox>
    );
}

export default Layout;
