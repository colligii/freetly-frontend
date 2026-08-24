import { Flex, Heading } from "@radix-ui/themes";
import { Link } from "react-router";
import Header from "../components/header";

export default function LandingPage() {
    return (
        <>
            <Header/>
            <Flex 
                height="80vh"
                className="lp-px"
            >
                <Flex
                    flexGrow="1"
                    align="center"
                    direction="column"
                    gap="3"
                    justify="center"
                >
                    <Heading 
                        as="h1"
                        size="7"
                        align="center"
                    >
                        The open-source, self-hosted platform for intelligent fleet and transfer management.
                    </Heading>
                    <Link className="bg-[#303030] px-4 py-2 rounded-md text-white" to="#">Go to Docs</Link>
                </Flex>

            </Flex>
        </>
    )
}