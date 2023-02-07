import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/books')
        .then(res => res.json())
        .then(data => setBooks(data.data))
    },[])
    
    return [books, setBooks];
}


export default useBooks;
