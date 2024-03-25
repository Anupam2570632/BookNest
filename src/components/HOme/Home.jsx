import { Outlet } from "react-router-dom";
import { NavbarDefault } from "./NavBar/NavbarDefault";
import './HOme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div className="font-sans">
            <NavbarDefault></NavbarDefault>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Home;