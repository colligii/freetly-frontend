import LandingPage from "./landing-page";
import TestEnviroment from "../../components/testenv";
import DemoSuccess from "./success";
import Track from "./track";

export const demoChildren = [
    {
        path: "",
        Component: LandingPage
    },
    {
        path: "quote/success",
        Component: DemoSuccess
    },
    {
        path: "track/:token",
        Component: Track
    }
]

export function DemoLayout() {
    return <TestEnviroment/>
}