import {Button, Form} from "react-bootstrap";
import {onChangeText} from "../../util/eventHandlers";
import {LoginContainer} from './Login.styled'
import { useState, useEffect } from "react";
import useFetchMutation from "../../hook/useFetchMutation"
import { login } from "../../services/authApi";
import { getToken, setToken } from "../../util/token";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName ] = useState("")
    const [password, setPassword] = useState("")
    const {loading, fetchMutation} = useFetchMutation(login, (data) => {
        const token = data?.data
        console.log(token);
        if (token) {
            setToken(token)
            navigate("/")
        }
    })

    const isLogin = () => {
        return !!getToken()
    }

    useEffect(() => {
        if (isLogin()) {
          navigate("/");
        }
      }, []);

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetchMutation({userName, password})
    }

    return (
        <LoginContainer>
            <h1>Hello, admin...</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={userName}
                        onChange={onChangeText(setUserName)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChangeText(setPassword)}
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="success" type="submit" disabled={!validateForm} >
                    Submit
                </Button>
            </Form>
        </LoginContainer>

)
}


export default Login