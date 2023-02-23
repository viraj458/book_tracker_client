import { useEffect, useState } from "react"
import BookDetails from "../../components/BookDetails/BookDetails"
import BookForm from "../../components/BookForm/BookForm"

const Home = () => {
const [books, setBooks] = useState(null)

    useEffect(()=>{
        const fetchBooks = async() => {
            const response = await fetch('/api/books')
            const data = await response.json()

            if(response.ok){
                console.log(data)
                setBooks(data)
            }

        }
        fetchBooks()

    },[])

    return(
        <div className="home">
            <div className="books">
            {books && books.map((book)=>(
                <BookDetails book={book}  key={book._id}/>
            ))}
            </div>
            <BookForm/>
        </div>
    )
}

export default Home