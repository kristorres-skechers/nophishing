import React from "react";

import FlexBox from "./FlexBox.js";
import {sleep} from "../helpers.js";
import {useComponentDidMount} from "../hooks.js";

const redirectURL = "https://www.youtube.com/watch?v=mH0_XpSHkZo";

function Reward() {

    useComponentDidMount(
        async () => {
            await sleep(3);
            window.location.href = redirectURL;
        }
    );

    return (
        <FlexBox
            component="main"
            level={1}
            justifyContent="center"
            alignItems="center"
            className="mdc-theme--surface reward"
        >
            <h1 className="mdc-typography--headline1">Congrats! 🎉</h1>
            <p className="mdc-typography--headline4">
                The redeemable code for your new $10,000 Starbucks gift card is:
                14389423
            </p>
        </FlexBox>
    );
}

export default Reward;
