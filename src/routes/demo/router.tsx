import LandingPage from "./landing-page";
import TestEnviroment from "../../components/testenv";

export const demoChildren = [
    {
        path: "",
        Component: LandingPage
    }
]

export function DemoLayout() {
    return <TestEnviroment/>
}