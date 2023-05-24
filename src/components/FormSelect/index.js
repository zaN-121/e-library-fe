import React from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

const FormSelect = (props) => {
    const {label, placeholder, onChange, value, values} = props
    return (
        <>
        
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
        </>        
         )
}

export default FormSelect