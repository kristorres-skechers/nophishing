import React from "react";

import FlexBox from "./FlexBox.js";

function Footer() {
    return (
        <footer className="mdc-theme--surface">
            <FlexBox
                level={1}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <p className="mdc-typography--caption mdc-theme--on-surface">
                    {"Powered by "}
                    <a href="https://www.okta.com">Okta</a>
                </p>
                <p className="mdc-typography--caption mdc-theme--on-surface">
                    <a href="https://www.okta.com/privacy-policy">
                        Privacy Policy
                    </a>
                </p>
            </FlexBox>
        </footer>
    );
}

export default Footer;
