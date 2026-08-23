import { RouterProvider, createBrowserRouter } from "react-router";
import LandingPage from "./routes";

let router = createBrowserRouter([
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