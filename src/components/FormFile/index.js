import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const isObject = (value) => typeof value === "object"

const FormFile = ({label, placeholder, value, onChange, disabled, id}) => (
    <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormControl 
            type="file"
            placeholder={placeholder}
            onChange={onChange}
            isValid={!!value}
            disabled={disabled}
        />
        {!isObject(value) && <Form.Text id={id}>{value}</Form.Text>}
    </FormGroup>
)

export default FormFile