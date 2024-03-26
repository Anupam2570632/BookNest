

const ReadBook = ({ book }) => {
    const { bookName, image, author, rating, tags, yearOfPublishing, oublisher } = book;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{bookName}</h2>
                <h3>By : {author}</h3>
            </div>
            <div>
                {
                    tags.map((tag, idx) => <button key={idx}>{tags[idx]}</button>)
                }
            </div>
        </div>
    );
};

export default ReadBook;