import { Flex } from "@radix-ui/themes"
import { Outlet } from "react-router";

const isTestEnv = import.meta.env.VITE_TEST_ENVIRONMENT == "true";

export default function TestEnviroment() {
    return <>
        <Flex>
            <Flex
                direction="column"
                flexGrow="1"
            >
                {isTestEnv && <Flex
                    className="bg-red-500 text-white font-bold fixed z-2 w-full"
                    justify="center"
                >This is a test environemnt nothing that you do here changes the real environemnt.</Flex>}
                <Outlet />
            </Flex>
        </Flex>
    </>
}