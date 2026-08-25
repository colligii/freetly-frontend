import LandingPage from "./landing-page";
import TestEnviroment from "../../components/testenv";
import { Component } from "react";
import DemoSuccess from "./success";

export const demoChildren = [
    {
        path: "",
        Component: LandingPage
    },
    {
        path: "success",
        Component: DemoSuccess
    }
]

export function DemoLayout() {
    return <TestEnviroment/>
}