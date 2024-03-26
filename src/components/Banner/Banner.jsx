import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/banner.png';
const Banner = () => {
    return (
        <div className="w-11/12 md:w-4/5 md:my-10 my-4 lg:rounded-3xl rounded-md mx-auto bg-[#1313130D] flex items-center justify-between">
            <div className='lg:px-[120px] p-4 lg:py-20 flex flex-col lg:flex-row items-center justify-between w-full'>
                <div className='flex items-center md:items-start flex-col mb-10 lg:mb-0'>
                    <h1 className='md:text-[50px] leading-normal font-playfair max-w-[500px] text-3xl font-bold text-[#131313]'>
                        Books to freshen up your bookshelf
                    </h1>
                    <Link to={'/listedbooks'}><button className='mt-12 bg-[#23BE0A] rounded-lg px-7 text-[20px] py-5 text-white font-bold'>
                        View The List
                    </button></Link>
                </div>
                <div>
                    <img src={bannerImg} alt="nn" />
                </div>
            </div>
        </div>
    );
};

export default Banner;