import { Flex, Heading } from "@radix-ui/themes"
import { Form } from "radix-ui"
const Login = () => {
    return (
        <Flex
            className="absolute h-[100vh] w-[100vw] px-lp"
        >
            <Flex
                flexGrow="1"
            ></Flex>

            <Flex
                flexGrow="1"
                direction="column"
                align="center"
                justify="center"
            >
                <Heading as="h4">Login</Heading>
                <Form.Root>
                    <Form.Field name="email">
                        <div className="flex flex-col item-baseline justify-between">
                            <Form.Label>Email:</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your email
                            </Form.Message>
                            <Form.Message match="typeMismatch">
                                Please provide a valid email
                            </Form.Message>
                            <Form.Control asChild>
                                <input type="email" required />
                            </Form.Control>
                        </div>
                    </Form.Field>
                    <Form.Field name="password">
                        <div className="flex flex-col item-baseline justify-between">
                            <Form.Label>Password:</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your email
                            </Form.Message>
                            <Form.Message match="typeMismatch">
                                Please provide a valid email
                            </Form.Message>
                            <Form.Control asChild>
                                <input type="email" required />
                            </Form.Control>
                        </div>
                    </Form.Field>
                    <Form.Submit asChild>
                        <button>
                            Post
                        </button>
                    </Form.Submit>
                </Form.Root>
            </Flex>
        </Flex>
    )
}

export default Login