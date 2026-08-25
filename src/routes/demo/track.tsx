import { Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function Track() {
    const [status, setStatus] = useState<"map" | "finished">("map")

    // mock logic when travels get completed
    useEffect(() => {
        const timeout = setTimeout(() => {
            setStatus("finished");
        }, 10000)

        return () => clearTimeout(timeout)
    }, [])

    if (status === "map")
        return <TrackMap />

    return <TrackCompleted />
}

function TrackCompleted() {
    return (
        <Flex
            height="100vh"
            className="bg-green-500"
            justify="center"
            align="center"
        >
            <Heading as="h3">
                Your travel was finished successfully!
            </Heading>
        </Flex>
    )
}

function TrackMap() {
    return (
        <>
            <Flex
                justify="center"
                height="30vh"
                className="border-b-2 p-4"
                direction="column"
            >
                <Heading as="h2">
                    Your travel status is:
                </Heading>
                <Text>
                    The driver is comming to your spot!
                </Text>
            </Flex>
            <Flex
                height="70vh"
                className="bg-green-500"
                justify="center"
                align="center"
            >
                Map
            </Flex>
        </>
    )
}