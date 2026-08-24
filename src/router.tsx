import { RouterProvider, createBrowserRouter } from "react-router";
import LandingPage from "./routes";
import Login from "./routes/login";
import TestEnviroment from "./components/testenv";

let router = createBrowserRouter([
    {
        Component: TestEnviroment,
        children: [
            {
                "path": "/login",
                Component: Login
            }
        ] 
    },
    {
        path: "*",
        Component: LandingPage
    }
])

export default function Router() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}