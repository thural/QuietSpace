import { useState } from "react";
import styles from "./styles/loginFormStyles";
import { Button, Text, Title } from "@mantine/core";
import { usePostLogin } from "../../hooks/useAuthData";
import { useNavigate } from "react-router-dom";


const LoginForm = ({ setAuthState }) => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const loginMutation = usePostLogin();

    if (loginMutation.isSuccess) navigate("/posts");


    const handleLoginForm = async (event) => {
        console.log("form data on login submit: ", formData);
        event.preventDefault();
        loginMutation.mutate(formData);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }


    const classes = styles();


    return (
        <>
            <div className={classes.login}>
                <Title order={2}>Login</Title>
                <form className='login form'>
                    <div className="login input">
                        <input
                            type='text'
                            name='email'
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        className="button"
                        fullWidth
                        radius="md"
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        onClick={handleLoginForm}>
                        submit
                    </Button>
                </form>
                <Text className="signup-prompt">don't have an account?</Text>
                <Button className="button" variant="outline" onClick={() => setAuthState("signup")}>signup</Button>
            </div>
        </>
    )
}

export default LoginForm