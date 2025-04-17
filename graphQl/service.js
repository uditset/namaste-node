export const getBooks = () => {
    //logic to get it from db
    const books = [{
        name: "Rich Dad Poor Dad",
        id: 1,
        publishDate: "17-04-2025",
        authorId: 1
    },{
        name: "Personal MBA",
        id: 2,
        publishDate: "17-04-2025",
        authorId: 2 
    },{
        name: "Personal Finance Management",
        id: 3,
        publishDate: "17-04-2025",
        authorId: 3,
    },{
        name: "Surveykaro success story",
        id: 4,
        publishDate: "01-05-2026",
        authorId: 2
    }]
    
    console.log("In get Books");
    return books;
}

export const getAuthors = () => {
    //logic to get it from db
    const authors = [{
        name: "Robert T. Kyosaki99",
        id: 1,
        booksId: ['1']
    },{
        name: "Udit Sethi",
        id: 2,
        phoneNum: "8700997351",
        booksId: ['2','4']
    },{
        name: "Richard Danial",
        id: 3,
        booksId: ['3']
    }]
    console.log("In get Authors");
    return authors;
}