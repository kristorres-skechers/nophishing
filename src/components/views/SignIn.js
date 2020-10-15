import React, {useState} from "react";

import Button from "../controls/Button.js";
import Checkbox from "../controls/Checkbox.js";
import TextField from "../controls/TextField.js";
import {actions} from "../../app-state.js";

const styles = {
    root: {
        border: "1px solid #DDDDDD",
        borderRadius: 4,
        textAlign: "center",
        width: 400
    },
    section: {
        borderBottom: "1px solid #DDDDDD",
        padding: 28
    },
    textField: {
        width: "100%",
        margin: "8px 0"
    },
    checkbox: {
        width: "100%",
        margin: "8px 0"
    },
    button: {
        width: "100%",
        height: 56,
        margin: "8px 0"
    }
};

const logoURL = "https://ok7static.oktacdn.com/fs/bco/1/fs02kbw410McCjnQK356";

function SignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => actions.screenKey.$update({newValue: "Placeholder"});

    return (
        <div className="mdc-theme--surface" style={styles.root}>
            <div style={styles.section}>
                <img src={logoURL} alt="Skechers logo"/>
            </div>
            <div style={styles.section}>
                <h2 className="mdc-typography--headline6 mdc-theme--on-surface">
                    Sign In
                </h2>
                <TextField
                    label="Username"
                    value={username}
                    setValue={setUsername}
                    style={styles.textField}
                />
                <TextField
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    secure
                    style={styles.textField}
                />
                <Checkbox label="Remember me" style={styles.checkbox}/>
                <Button
                    label="Sign In"
                    onPress={signIn}
                    disabled={username.length === 0 || password.length === 0}
                    style={styles.button}
                />
            </div>
        </div>
    );
}

export default SignIn;
