import { useEffect, useState } from "react";

const LoadData = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return books;
}

export default LoadData;
