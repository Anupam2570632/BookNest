import { RxAvatar } from "react-icons/rx";
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";


const ContactPage = () => {
    return (
        <div className="w-11/12 md:w-4/5 rounded-2xl mx-auto px-4 py-10 md:p-20 flex flex-col space-y-8 bg-[#f3f4f6] my-10 items-center justify-center">
            <h1 className="md:text-4xl text-2xl font-black">Feel free to contact me!</h1>
            <div className="text-9xl border duration-200 hover:border-light-blue-600 rounded-full"><RxAvatar></RxAvatar></div>
            <div className="flex gap-8">
                <FaFacebookSquare className="text-4xl hover:text-purple-500 duration-200 hover:cursor-pointer"></FaFacebookSquare>
                <FaTwitterSquare className="text-4xl hover:text-purple-500 duration-200 hover:cursor-pointer"></FaTwitterSquare>
                <FaGithubSquare className="text-4xl hover:text-purple-500 duration-200 hover:cursor-pointer"></FaGithubSquare>
                <FaInstagramSquare className="text-4xl hover:text-purple-500 duration-200 hover:cursor-pointer"></FaInstagramSquare>
            </div>
        </div>
    );
};

export default ContactPage;