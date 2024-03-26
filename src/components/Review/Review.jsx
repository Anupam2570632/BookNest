
const Review = () => {
    const user = [
        {
            "name": "Sarah123",
            "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "review": "I absolutely love using Vibe Books! The interface is clean and easy to navigate, and I've discovered so many great books through their recommendations. The reviews are insightful, and I appreciate the variety of genres covered on the site. Keep up the great work!"
        },
        {
            "name": "JohnDoeReads",
            "img": "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "review": "Vibe Books has become my go-to resource for finding new reads. The book summaries are concise yet informative, helping me decide which books to add to my reading list. I also enjoy participating in the discussions on the platform. It's a fantastic community for book lovers!"
        },
        {
            "name": "BookLover22",
            "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "review": "As an avid reader, I've tried several book review websites, but Vibe Books stands out for its user-friendly design and comprehensive book database. The personalized recommendations based on my reading history are spot on, and I appreciate the timely updates on new releases. Vibe Books has enhanced my reading experience in so many ways!"
        }
    ];

    return (
        <div className="w-11/12 md:w-4/5 mx-auto my-10">
            <div className="flex gap-6">
                <div className="space-y-6">
                    <h2 className="text-center text-2xl font-bold border border-blue-500 p-4 bg-gray-300">User Review</h2>
                    {
                        user.map((id, idx) => <div className="space-y-6 p-6 border border-blue-500 rounded-xl" key={idx}>
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 overflow-hidden rounded-full">
                                    <img className="h-full w-full" src={id.img} alt="" />
                                </div>
                                <h2>{id.name}</h2>
                            </div>
                            <hr />
                            <p>
                                {id.review}
                            </p>
                        </div>)
                    }
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-300 rounded-lg space-y-4 h-fit">
                    <h2 className="text-2xl font-semibold text-center">Send your review here</h2>
                    <input className="w-full p-3 outline-blue-400 rounded-lg" type="text"  id="name" placeholder="enter your name" />
                    <input className="w-full p-3 outline-blue-400 rounded-lg" type="email" placeholder="enter your email here" />
                    <textarea className="p-4 rounded-lg outline-blue-400" name="review" id="" cols="40" rows="10" placeholder="type your review here"></textarea>
                    <button className="px-5 py-3 rounded-md bg-cyan-600 font-bold text-white">Send Review</button>
                </div>
            </div>
        </div>
    );
};

export default Review;