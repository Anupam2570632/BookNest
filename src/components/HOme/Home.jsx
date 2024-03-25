import { Outlet } from "react-router-dom";
import { NavbarDefault } from "./NavBar/NavbarDefault";

const Home = () => {
    return (
        <div>
            <NavbarDefault></NavbarDefault>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;