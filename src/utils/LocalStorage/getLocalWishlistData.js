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
        } else {
            toast.warn('Already read');
        }
    } else if (!isExitsOn) {
        wishlistData.push(book);
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
        toast.success('Successfully added to Wishlist');
    }
    else {
        toast.warn("already exist on wishlist");
    }
}

export default handleWishlistBook;
