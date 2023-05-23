import React from 'react';
import { Form } from 'react-bootstrap';

const NumberInput = ({ label, placeholder, value, onChange, disabled }) => {
  return (
    <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            isValid={!!value}
        />
    </Form.Group>
  );
};

export default NumberInput;
