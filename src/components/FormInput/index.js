import React from "react";
import FormFile from "../FormFile";
import FormText from "../FormText"
import FormNumber from "../FormNumber"

const FormInput = (props) => {
    let Component;
    switch (props.type) {
        case "file":
            Component = FormFile;
            break;
        case "number":
            Component = FormNumber;
            break;    
        default:
            Component = FormText;
        break;
    }

    return <Component {...props} />
}

export default FormInput;