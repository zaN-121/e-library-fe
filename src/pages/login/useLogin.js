import {useState} from "react";

const useLogin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return {
        getter: {
            username,
            password
        },
        setter: {
            setUsername,
            setPassword
        }
    }
}

export default useLogin