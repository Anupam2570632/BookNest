import { toast } from "react-toastify";

const handleReadBooks = (book) => {

    const localData = JSON.parse(localStorage.getItem('read') || "[]");

    const isExits = localData.find((item) => item.bookId == book.bookId);

    if (!isExits) {
        localData.push(book);
        localStorage.setItem('read', JSON.stringify(localData));
        toast.success('Successfully added to Read List')
    }
    else{
        toast.warning('This book was already read.')
    }

}

export default handleReadBooks;