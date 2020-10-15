import React from "react";

import FlexBox from "./FlexBox.js";
import {actions} from "../app-state.js";
import {sleep} from "../helpers.js";
import {useComponentDidMount} from "../hooks.js";

const spinnerURL = "<PUBLIC DIRECTORY>images/spinner.gif";

function Placeholder() {

    useComponentDidMount(
        async () => {
            await sleep(3);
            actions.screenKey.$update({newValue: "Reward"});
        }
    );

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
