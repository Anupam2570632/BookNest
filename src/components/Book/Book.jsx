import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Book = ({ data }) => {
    const { bookId, author, category, image, tags, rating, bookName } = data;
    return (
        <Link to={`/books-details/${bookId}`} className='p-6 rounded-2xl border space-y-6 border-gray-300'>
            <div className='h-[300px] rounded-2xl flex items-center justify-center bg-[#F3F3F3]'>
                <img className='h-[250px] py-6' src={image} alt="" />
            </div>
            <div className='space-y-4'>
                <div className='flex gap-3'>
                    {
                        tags.map((btn, idx) => <button className='px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium' key={idx}>{tags[idx]}</button>)
                    }
                </div>
                <h2 className='text-[#131313] font-playfair font-bold text-2xl'>
                    {bookName}
                </h2>
                <h1 className='text-[#131313CC] font-medium'>
                    <span>By : </span> {author}
                </h1>
                <hr />
                <div className='text-[#131313CC] font-medium flex items-center justify-between'>
                    <h1>
                        {category}
                    </h1>
                    <div className='flex items-center gap-2'>
                        <span>
                            {rating}
                        </span>
                        <FaRegStar className='text-[24px]'></FaRegStar>
                    </div>
                </div>
            </div>

        </Link>
    );
};

Book.propTypes = {
    data: PropTypes.object
}

export default Book;