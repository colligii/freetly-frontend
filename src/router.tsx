import { RouterProvider, createBrowserRouter } from "react-router";
import ProductLandingPage from "./routes";
import Login from "./routes/login";
import TestEnviroment from "./components/testenv";
import { demoChildren, DemoLayout } from "./routes/demo/router";

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
        path: import.meta.env.VITE_DEMO_URL,
        Component: DemoLayout,
        children: demoChildren
    },
    {
        path: "*",
        Component: ProductLandingPage
    }
])

export default function Router() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}