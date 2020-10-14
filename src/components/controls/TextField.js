import {MDCTextField} from "@material/textfield";
import PropTypes from "prop-types";
import React from "react";

import {useComponentDidMount} from "../../hooks.js";

function TextField({label, value, setValue, style}) {

    const id = label.replace(/ /g, "-").toLowerCase();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useComponentDidMount(
        () => {
            new MDCTextField(document.querySelector(`.${id}`));
        }
    );

    return (
        <div
            className={`mdc-text-field mdc-text-field--outlined ${id}`}
            style={style}
        >
            <input
                type="text"
                id={id}
                className="mdc-text-field__input"
                value={value}
                onChange={handleChange}
            />
            <div className="mdc-notched-outline">
                <div className="mdc-notched-outline__leading"></div>
                <div className="mdc-notched-outline__notch">
                    <label htmlFor={id} className="mdc-floating-label">
                        {label}
                    </label>
                </div>
                <div className="mdc-notched-outline__trailing"></div>
            </div>
        </div>
    );
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
};

TextField.defaultProps = {
    style: {}
};

export default TextField;
