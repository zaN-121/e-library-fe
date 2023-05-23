import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const FormText = ({label, type, placeholder, value, onChange, disabled}) => {
    let props;
    switch (type) {
        case "textarea":
            props = {as: type}
            break;
        default:
            props = {type}
            break;    
    }
    return (
        <FormGroup>
            <FormLabel>{label}</FormLabel>
            <FormControl 
                {...props}
                placeholder={placeholder}
                onChange={onChange}
                isValid={!!value}
                disabled={disabled}
                value={value}
            />
        </FormGroup>
    )
}

export default FormText