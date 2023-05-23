import {Button, Form} from "react-bootstrap";
import useLogin from "./useLogin";
import {onChangeText} from "../../util/eventHandlers";
import {LoginContainer} from './Login.styled'
const Login = () => {
    const {getter, setter} = useLogin()
    return (
        <LoginContainer>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={() => onChangeText(setter.setUsername)}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={() => onChangeText(setter.setPassword)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </LoginContainer>

)
}


export default Login