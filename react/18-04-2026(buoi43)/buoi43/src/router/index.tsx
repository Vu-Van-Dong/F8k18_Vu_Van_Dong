import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/login";
import HomePage from "../page/home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <HomePage />
    }
]);

export default router;