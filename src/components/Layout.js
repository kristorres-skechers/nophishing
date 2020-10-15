import norn from "@axel669/norn/esm";
import React from "react";

import FlexBox from "./FlexBox.js";
import HelloWorld from "./HelloWorld.js";
import Placeholder from "./Placeholder.js";
import {store} from "../app-state.js";

function Layout() {

    const screens = {
        HelloWorld: <HelloWorld/>,
        Placeholder: <Placeholder/>
    };

    const {screenKey} = norn.useStore(store);

    return (
        <FlexBox style={{minHeight: "100vh"}}>
            {screens[screenKey]}
        </FlexBox>
    );
}

export default Layout;
