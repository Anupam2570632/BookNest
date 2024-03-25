import React from "react";
import './NavBar.css'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavLink className={'px-5 py-3 font-medium'} to={'/'}>Home</NavLink>
            <NavLink className={'px-5 py-3 font-medium'} to={'/listedbooks'}>Listed Books</NavLink>
            <NavLink className={'px-5 py-3 font-medium'} to={'/pagetoread'}>Page To Read</NavLink>
        </ul>
    );

    return (
        <Navbar className="mx-auto my-4 shadow-none w-full px-4 py-2">
            <div className="mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="text-3xl font-black">
                    Book Vibe
                </div>
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    <Button size="lg" className="hidden lg:inline-block bg-[#23BE0A]">
                        <span>Sign In</span>
                    </Button>
                    <Button

                        size="lg"
                        className="hidden bg-[#59C6D2] lg:inline-block"
                    >
                        <span>Sign Up</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="text-black font-bold container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth size="sm" className="bg-[#23BE0A]">
                            <span>Sign In</span>
                        </Button>
                        <Button fullWidth size="sm" className="bg-[#59C6D2]">
                            <span>Sign Up</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}