import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import User from "./routes/User";
import About from "./routes/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "users/:userId",
                element: <User/>,
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    },
    
]);

export {router};