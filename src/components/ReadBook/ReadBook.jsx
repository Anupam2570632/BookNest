import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';



const ReadBook = ({ book }) => {
    const { bookName, bookId, totalPages, category, image, author, rating, tags, yearOfPublishing, publisher } = book;
    return (
        <div className='flex flex-col md:flex-row border items-center gap-6 p-6 border-[#13131326] rounded-2xl'>
            <div className='w-[250px] bg-[#1313130D] rounded-2xl'>
                <img className='p-14' src={image} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold font-playfair text-[#131313]'>{bookName}</h2>
                    <h3 className='text-[#131313CC] font-medium'>By : {author}</h3>
                </div>
                <div className='flex flex-col md:flex-row text-start md:items-center gap-8'>
                    <div>
                        <span>Tag </span>
                        {
                            tags.map((tag, idx) => <button className='text-[#23BE0A] px-4 py-2 rounded-3xl mr-3 bg-[#23BE0A0D] font-medium' key={idx}>#{tags[idx]}</button>)
                        }
                    </div>
                    <div className='flex items-center gap-2 text-[#131313CC]'>
                        <SlLocationPin className='text-[24px] text-[#424242]' /><span>Year of Publishing : {yearOfPublishing}</span>

                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-[#13131399]'>
                    <div className='flex items-center gap-3'>
                        <BsPeople className='text-[24px]' /><span>Publisher : {publisher}</span>

                    </div>
                    <div className='flex items-center gap-3'>
                        <RiPagesLine className='text-[24px]' /><span>Page {totalPages}</span>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <button className='px-5 rounded-3xl py-3 text-[#328EFF] bg-[#328EFF26]'>Category : {category}</button>
                    <button className='px-5 rounded-3xl py-3 text-[#FFAC33] bg-[#FFAC3326]'>Rating : {rating}</button>
                    <Link to={`/books-details/${bookId}`} className='px-5 rounded-3xl py-3 bg-[#23BE0A] text-white'><button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object
}

export default ReadBook;