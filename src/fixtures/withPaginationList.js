import React from "react";
import { useNavigate } from "react-router-dom";

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate()
        const {label, routeToAdd, query} = opts
    }
}