import { useState } from "react"

const BookForm = () => {
    
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [page, setPage] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = () => {
        
    }


  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new book</h3>
            <label>Title:</label>
            <input 
            type="text"
            onChange={e=>{e.target.value}}
            value={title}
            />

            <label>Author:</label>
            <input 
            type="text"
            onChange={e=>{e.target.value}}
            value={author}
            />

            <label>Current reading page:</label>
            <input 
            type="number"
            onChange={e=>{e.target.value}}
            value={page}
            />

            <button>Add Book</button>
            {error && <div className="error">{error}</div>}
    </form>
  )
}

export default BookForm