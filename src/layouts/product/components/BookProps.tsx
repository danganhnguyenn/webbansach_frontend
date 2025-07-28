import type {Book} from "../../../models/Book.ts";


interface BookProps{
    book: Book;
}

const BookProps: React.FC<BookProps> = ({book}) =>{
    return (
        <div className="bg-white rounded-xl shadow-md border hover:shadow-lg transition duration-300 flex flex-col">
            {/* Ảnh sách */}
            <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-80 object-contain rounded-t-xl bg-white p-2"
            />

            {/* Nội dung */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{book.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{book.description}</p>
                <div className="mt-3">
                    <p className="text-gray-400 line-through text-sm">{book.originalPrice.toLocaleString()}₫</p>
                    <p className="text-lg font-bold text-gray-900">{book.price.toLocaleString()}₫</p>
                </div>
            </div>

            {/* Icon nút */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-b-xl border-t">
                {/* Yêu thích */}
                <button className="p-2 rounded-full border hover:bg-gray-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor"
                         className="w-6 h-6 text-gray-800 hover:text-red-500 transition">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.74 0-3.303 1.008-4.062 2.496C11.491 4.758 9.928 3.75 8.188 3.75 5.6 3.75 3.5 5.765 3.5 8.25c0 7.22 8.25 11.25 8.25 11.25s8.25-4.03 8.25-11.25z" />
                    </svg>
                </button>
                {/* Giỏ hàng */}
                <button className="p-2 rounded-full border hover:bg-gray-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor"
                         className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 3h1.5l1.5 12.75A1.5 1.5 0 006.75 17.25h10.5a1.5 1.5 0 001.5-1.5l1.5-9H6.75" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 21h.008v-.008H9V21zm6 0h.008v-.008H15V21z" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default BookProps;