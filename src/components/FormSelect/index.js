import React from "react";
import { FormGroup, FormLabel } from "react-bootstrap";

const FormSelect = (props) => {
    const {label, placeholder, onChange, value, values} = props
    return (
        <>
            <FormGroup className="mb-3">
                <FormLabel>{label}</FormLabel>
                <FormSelect 
                    onChange={onChange}
                    defaultValue={value}
                >
                    <option>{placeholder}</option>
                    {values?.map((item) => {
                        return (
                            <option value={item.value}>
                                {item.label}
                            </option>
                        )
                    })}
                </FormSelect>
            </FormGroup>
        </>
    )
}

export default FormSelect