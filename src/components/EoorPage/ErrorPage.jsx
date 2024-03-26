import { FaRegFaceSadCry } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-8 items-center h-screen w-screen justify-center">
            <h2 className="flex text-5xl font-bold gap-4"><FaRegFaceSadCry></FaRegFaceSadCry><span>404  Page Not Found..</span></h2>
            <Link to={'/'} className="px-5 py-3 bg-cyan-800 rounded-lg font-bold text-white text-[20px]"><button>GO TO HOMEPAGE</button></Link>
        </div>
    );
};

export default ErrorPage;