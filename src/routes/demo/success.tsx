import { Flex, Heading } from "@radix-ui/themes";

export default function DemoSuccess() {
    return (
        <Flex
            width="100vw"
            height="100vh"
            className="bg-green-300"
            justify="center"
            align="center"
        >
            <Heading as="h3">
                Success in your quote, you will receive all the informations in your email!
            </Heading>
        </Flex>
    )
}