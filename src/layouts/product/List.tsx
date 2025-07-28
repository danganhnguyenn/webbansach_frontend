
import type { Book } from '../../models/Book.ts';
import type {FC} from "react";
import BookProps from "./components/BookProps.tsx";

const List: FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img01.png',
        },
        {
            id: 2,
            title: 'Book 2',
            description: 'Description for Book 2',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img02.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            description: 'Description for Book 3',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img03.jpg',
        },
        {
            id: 4,
            title: 'Book 4',
            description: 'Description for Book 4',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img04.png',
        },
        {
            id: 5,
            title: 'Book 5',
            description: 'Description for Book 5',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img05.jpg',
        },
        {
            id: 6,
            title: 'Book 6',
            description: 'Description for Book 6',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img06.jpg',
        },
        {
            id: 7,
            title: 'Book 7',
            description: 'Description for Book 7',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img07.jpg',
        },
        {
            id: 8,
            title: 'Book 8',
            description: 'Description for Book 8',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img08.jpg',
        },
        {
            id: 9,
            title: 'Book 9',
            description: 'Description for Book 9',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img09.jpg',
        },
        {
            id: 10,
            title: 'Book 10',
            description: 'Description for Book 10',
            originalPrice: 5000,
            price: 4500,
            imageUrl: './images/books/img10.jpg',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8 mb-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Danh sách sách</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {books.map((book) => (
                    <BookProps key={book.id} book={book}/>
                ))}
            </div>
        </div>
    );
};

export default List;