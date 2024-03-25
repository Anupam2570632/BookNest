import { useParams } from "react-router-dom";
import LoadData from "../../Data/useLoaderBooks";

const BookDetails = () => {
    const { id } = useParams();
    const books = LoadData();
    const book = books.find((item) => item.bookId == id);
    console.log(book)
    if (!book) {
        return <div>No book found for the provided ID</div>;
    }
    const { image, bookName, tags, totalPages, rating, yearOfPublishing, author, review, publisher, category } = book;
    return (
        <div className="flex flex-col lg:flex-row w-11/12 my-12 md:w-4/5 mx-auto gap-12">
            <div className="lg:w-[45%] bg-[#1313130D] rounded-2xl">
                <img className="md:p-[80px] " src={image} alt="" />
            </div>
            <div className="lg:w-[55%] space-y-4">
                <h1 className="font-bold text-[40px] text-[#131313]">
                    {bookName}
                </h1>
                <p>By : {author}</p>
                <hr />
                <h3>
                    {category}
                </h3>
                <hr />
                <p><span>Review : </span>{review}</p>
                <div className='flex gap-3'>
                    {
                        tags.map((btn, idx) => <button className='px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium' key={idx}>{tags[idx]}</button>)
                    }
                </div>
                <hr />
                <h2><span>Number of pages : </span>{totalPages}</h2>
                <h2><span>Publisher : </span>{publisher}</h2>
                <h2><span>Year of Publishing : </span>{yearOfPublishing}</h2>
                <h2><span>Rating : </span>{rating}</h2>
                <div className="flex gap-4">
                    <button className="text-[18px] duration-300 hover:bg-gray-300 rounded-lg px-7 py-4 font-medium border border-gray-500 text-[#131313]">Read</button>
                    <button className="text-[18px] duration-300 hover:bg-transparent hover:text-black rounded-lg px-7 py-4 font-medium border border-[#50B1C9] text-white  bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;