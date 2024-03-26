import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../ReadBook/ReadBook';
import { FaRegFaceSadCry } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";





const ListBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readData, setReadData] = useState([]);
    const [wishlistData, setWishListData] = useState([]);
    useEffect(() => {
        const read = JSON.parse(localStorage.getItem('read') || "[]")
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || "[]")
        setReadData(read);
        setWishListData(wishlist)
    }, [])

    const handlePageSorting = () => {
        const sortReadData = [...readData].sort(function(a, b){
            return b.totalPages - a.totalPages;
        });
        
        const sortWishlistData = [...wishlistData].sort(function(a, b){
            return b.totalPages - a.totalPages;
        });
        setWishListData(sortWishlistData)
        setReadData(sortReadData);
    }

    const handleYearSorting = () => {
        const sortReadData = [...readData].sort(function(a, b){
            return b.yearOfPublishing - a.yearOfPublishing;
        });
        const sortWishlistData = [...wishlistData].sort(function(a, b){
            return b.yearOfPublishing - a.yearOfPublishing;
        });
        setWishListData(sortWishlistData)
        
        setReadData(sortReadData);
    }

    const handleRatingSorting = () => {
        const sortReadData = [...readData].sort(function(a, b){
            return b.rating - a.rating;
        });
        const sortWishlistData = [...wishlistData].sort(function(a, b){
            return b.rating - a.rating;
        });
        setWishListData(sortWishlistData)
        
        setReadData(sortReadData);
    }

    return (
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <div className='text-4xl font-bold bg-[#f3f4f6] rounded-xl p-8 text-center my-10'>
                Books
            </div>
            <div className='w-full text-center my-10'>
                <details className="dropdown">
                    <summary className="m-1 btn px-6 py-2 text-white bg-[#23BE0A]"><span>Sort by</span><IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handlePageSorting} className='px-4 py-2 text-start hover:cursor-pointer hover:bg-cyan-300 rounded-lg'>Pages</li>
                        <li onClick={handleRatingSorting} className='px-4 py-2 text-start hover:cursor-pointer hover:bg-cyan-300 rounded-lg'>Rating</li>
                        <li onClick={handleYearSorting} className='px-4 py-2 text-start hover:cursor-pointer hover:bg-cyan-300 rounded-lg'>Publishing Year</li>
                    </ul>
                </details>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div className='space-y-6 my-10'>
                        {
                            readData.length ? readData.map((book, idx) => <ReadBook key={idx} book={book}></ReadBook>) : <div className='flex items-center gap-4 text-center w-full font-black justify-center text-red-400 text-xl md:text-5xl'> <FaRegFaceSadCry />Sorry! No books added as read</div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='space-y-6 my-10'>
                        {
                            wishlistData.length ? wishlistData.map((book, idx) => <ReadBook key={idx} book={book}></ReadBook>) : <div className='flex items-center gap-4 text-center w-full font-black justify-center text-red-400 text-xl md:text-5xl'><FaRegFaceSadCry />Sorry! No books added as wishlist</div>
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};



export default ListBooks;