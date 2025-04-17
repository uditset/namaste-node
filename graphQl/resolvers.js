import { getAuthors, getBooks } from "./service.js";

const author_books = {};

export const resolvers = {
    Book: {
        author: (parent,args,context,info) => {
            //For each book time complexity is O(n);
            //total Time complexity in getting this nesting data is Object(n^2);
            //timcomplexity can be improved with map
            console.log(parent) //parent will contain info about the current book
            if(Object.keys(author_books)?.length===0)
            {
                const authorData = getAuthors();
                authorData?.forEach(item => {
                    item?.booksId?.forEach(bookId => {
                        author_books[bookId] = item;
                    })
                });
                console.log("Runnng Logic in O(no.of books)")
            }
            console.log("Hello: ",author_books);
            return author_books?.[parent?.id];
        }
    },
    Author: {
        books: (parent,info,context,args) => {
           const bookData = getBooks()?.filter(item => parent?.booksId?.includes(String(item?.id)));
           return bookData; 
        }
    },
    Query: {
        authors: getAuthors,
        books: getBooks,
    },
    Mutation: {
        addBook: (parent,args,context,info) => {
            console.log("type of Args: ",typeof args)
            console.log(args);
            const newBook = {...args,id: getBooks()?.length + 1};
            //Logic and db call to save new Book Data
            return newBook;
        }
    }
}