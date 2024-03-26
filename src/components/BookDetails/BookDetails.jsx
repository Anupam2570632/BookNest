import { useParams } from "react-router-dom";
import LoadData from "../../Data/useLoaderBooks";
import handleReadBooks from "../../utils/LocalStorage/getLocalReadData";
import handleWIshlistBook from "../../utils/LocalStorage/getLocalWishlistData";

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
                <h1 className="font-bold font-playfair text-[40px] text-[#131313]">
                    {bookName}
                </h1>
                <p className="text-[#131313CC] font-medium text-[20px]">By : {author}</p>
                <hr />
                <h3 className="text-[#131313CC] font-medium text-[20px]">
                    {category}
                </h3>
                <hr />
                <p className="text-[#131313B2]"><span className="font-bold text-[#131313]">Review : </span>{review}</p>
                <div className='flex gap-3'>
                    {
                        tags.map((btn, idx) => <button className='px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium' key={idx}>{tags[idx]}</button>)
                    }
                </div>
                <hr />
                <div className="w-[65%] space-y-4">
                    <h2 className="w-full flex justify-between"><span className="w-1/2 text-[#131313B2]">Number of pages : </span><span className="text-start w-1/2 text-[#131313]">{totalPages}</span></h2>
                    <h2 className="w-full flex justify-between"><span className="w-1/2 text-[#131313B2]">Publisher : </span><span className="text-start w-1/2 text-[#131313]">{publisher}</span></h2>
                    <h2 className="w-full flex justify-between"><span className="w-1/2 text-[#131313B2]">Year of Publishing : </span><span className="text-start w-1/2 text-[#131313]">{yearOfPublishing}</span></h2>
                    <h2 className="w-full flex justify-between"><span className="w-1/2 text-[#131313B2]">Rating : </span><span className="text-start w-1/2 text-[#131313]">{rating}</span></h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => handleReadBooks(book)} className="text-[18px] mt-4 duration-300 hover:bg-gray-300 rounded-lg px-7 py-4 font-medium border border-gray-500 text-[#131313]">Read</button>
                    <button onClick={() => handleWIshlistBook(book)} className="text-[18px] mt-4 duration-300 hover:bg-transparent hover:text-black rounded-lg px-7 py-4 font-medium border border-[#50B1C9] text-white  bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;