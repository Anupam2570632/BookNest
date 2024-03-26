import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../ReadBook/ReadBook';
import PropTypes from 'prop-types';


const ListBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readData, setReadData] = useState([]);
    const [wishlistData, setWishListData] = useState([]);
    useEffect(() => {
        const read = JSON.parse(localStorage.getItem('read'))
        const wishlist = JSON.parse(localStorage.getItem('wishlist'))
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
                    {
                        readData.map((book, idx) => <ReadBook key={idx} book={book}></ReadBook>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishlistData.map((book, idx) => <ReadBook key={idx} book={book}></ReadBook>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};
ListBooks.propTypes = {
    book: PropTypes.object
}


export default ListBooks;