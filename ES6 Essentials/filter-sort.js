import { sortByPublishYear, filterByGenre } from './utility-module.js';

const books = [
    {
        title: "JavaScript: The Good Parts",
        genre: "Programming",
        publish: 2008,
        edition: "1st"
    },
    {
        title: "Clean Code",
        genre: "Software Engineering",
        publish: 2008,
        edition: "1st"
    },
    {
        title: "You Don’t Know JS",
        genre: "Programming",
        publish: 2015,
        edition: "2nd"
    },
    {
        title: "The Pragmatic Programmer",
        genre: "Software Development",
        publish: 1999,
        edition: "1st"
    },
    {
        title: "Eloquent JavaScript",
        genre: "Programming",
        publish: 2018,
        edition: "3rd"
    },
    {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        genre: "Software Engineering",
        publish: 1994,
        edition: "1st"
    },
    {
        title: "Refactoring: Improving the Design of Existing Code",
        genre: "Programming",
        publish: 1999,
        edition: "1st"
    },
    {
        title: "Cracking the Coding Interview",
        genre: "Career/Interview",
        publish: 2015,
        edition: "6th"
    },
    {
        title: "Introduction to Algorithms",
        genre: "Computer Science",
        publish: 2009,
        edition: "3rd"
    },
    {
        title: "The Clean Coder",
        genre: "Software Development",
        publish: 2011,
        edition: "1st"
    },
    {
        title: "Head First Design Patterns",
        genre: "Software Engineering",
        publish: 2004,
        edition: "1st"
    },
    {
        title: "Programming Pearls",
        genre: "Computer Science",
        publish: 1986,
        edition: "2nd"
    },
    {
        title: "Code Complete",
        genre: "Software Development",
        publish: 2004,
        edition: "2nd"
    },
    {
        title: "Structure and Interpretation of Computer Programs",
        genre: "Computer Science",
        publish: 1996,
        edition: "2nd"
    },
    {
        title: "The Mythical Man-Month",
        genre: "Project Management",
        publish: 1975,
        edition: "1st"
    }
];

const filteredbooks = filterByGenre(books, "Computer Science")
const sortedlist = sortByPublishYear([...filteredbooks]);

console.log("Filtered and Sorted Books: ", sortedlist);
