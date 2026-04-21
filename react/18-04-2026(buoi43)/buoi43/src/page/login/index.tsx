import { useState } from "react";
import api from "../../plugins/axios";
import {
    Container,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    Paper
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

interface UserInfo {
    email: string;
    password: string;
}

const Login = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: "",
        password: ""
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    };

    const onSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await api.post("/login", userInfo);
            console.log("Login success:", res.data);
        } catch (err) {
            console.error("Login error:", err);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 3 }}>
                <Box display="flex" flexDirection="column" alignItems="center">

                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>

                    <Box component="form" onSubmit={onSignIn} sx={{ mt: 2 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            value={userInfo.email}
                            onChange={onInputChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={userInfo.password}
                            onChange={onInputChange}
                        />

                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                        />

                        <Button type="submit" fullWidth variant="contained">
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;