import { Flex } from "@radix-ui/themes";
import Logo from "../../assets/logo";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { Link } from "react-router";

export default function Header() {
    return (
        <Flex 
            className="p-4 lp-px" 
            direction="row" 
            justify="between"
        >
            <Logo
                width="50px"
                height="50px"
            />

           <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </Flex>
    )
}