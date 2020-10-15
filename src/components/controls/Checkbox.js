import {MDCCheckbox} from "@material/checkbox";
import {MDCFormField} from "@material/form-field";
import PropTypes from "prop-types";
import React from "react";

import {useComponentDidMount} from "../../hooks.js";

function Checkbox({label, style}) {

    const id = label.replace(/ /g, "-").toLowerCase();

    useComponentDidMount(
        () => {
            const checkbox = new MDCCheckbox(
                document.querySelector(".mdc-checkbox")
            );
            const formField = new MDCFormField(
                document.querySelector(".mdc-form-field")
            );
            formField.input = checkbox;
        }
    );

    return (
        <div className="mdc-form-field" style={style}>
            <div className="mdc-checkbox">
                <input
                    type="checkbox"
                    id={id}
                    className="mdc-checkbox__native-control"
                />
                <div className="mdc-checkbox__background">
                    <svg
                        className="mdc-checkbox__checkmark"
                        viewBox="0 0 24 24"
                    >
                        <path
                            className="mdc-checkbox__checkmark-path"
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                </div>
                <div className="mdc-checkbox__ripple"></div>
            </div>
            <label htmlFor={id} className="mdc-theme--on-surface">
                {label}
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
};

Checkbox.defaultProps = {
    style: {}
};

export default Checkbox;
