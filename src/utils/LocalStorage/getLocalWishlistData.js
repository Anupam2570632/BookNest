import { toast } from "react-toastify";

const handleWishlistBook = (book) => {
    const readData = JSON.parse(localStorage.getItem('read'));
    const wishlistData = JSON.parse(localStorage.getItem('wishlist') || "[]");

    const isExitsOn = wishlistData.find((item) => item.bookId == book.bookId)

    if (readData) {
        const isExits = readData.find((item) => item.bookId === book.bookId);

        if (!isExits && !isExitsOn) {
            wishlistData.push(book);
            localStorage.setItem('wishlist', JSON.stringify(wishlistData));
            toast.success('Successfully added to Wishlist');
        }
        else if (isExitsOn && !isExits) {
            toast.warning('already added in wishlist');
        }

        else {
            toast.warn('You already read this book');
        }
    } else {
        if (!isExitsOn) {
            wishlistData.push(book);
            localStorage.setItem('wishlist', JSON.stringify(wishlistData));
            toast.success('Successfully added to Wishlist');
        }
        else {
            toast.warn('already in wishlist');
        }
    }
}

export default handleWishlistBook;
