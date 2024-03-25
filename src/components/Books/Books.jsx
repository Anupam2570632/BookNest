import LoadData from "../../Data/useLoaderBooks";
import Book from "../Book/Book";


const Books = () => {
    const allData = LoadData();
    console.log(allData);
    return (
        <div className="w-11/12 md:w-4/5 mx-auto my-20">
            <h2 className="my-10 font-black text-3xl text-center">
                Books
            </h2>
            <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allData.map((data, idx) => <Book key={idx} data={data}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;