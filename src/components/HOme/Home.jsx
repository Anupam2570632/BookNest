import { Outlet } from "react-router-dom";
import { NavbarDefault } from "./NavBar/NavbarDefault";
import './HOme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div className="font-sans max-w-[1550px] mx-auto">
            <NavbarDefault></NavbarDefault>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Home;