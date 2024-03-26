import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../ReadBook/ReadBook';
import { FaRegFaceSadCry } from "react-icons/fa6";




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
    return (
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div className='space-y-6 my-10'>
                        {
                            readData.length ? readData.map((book, idx) => <ReadBook key={idx} book={book}></ReadBook>) : <div className='flex items-center gap-4 text-center w-full font-black justify-center text-red-400 text-5xl'> <FaRegFaceSadCry />Sorry! No books added as read</div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='space-y-6 my-10'>
                        {
                            wishlistData.length ? wishlistData.map((book, idx) => <ReadBook key={idx} book={book}></ReadBook>) : <div className='flex items-center gap-4 text-center w-full font-black justify-center text-red-400 text-5xl'><FaRegFaceSadCry />Sorry! No books added as wishlist</div>
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};



export default ListBooks;