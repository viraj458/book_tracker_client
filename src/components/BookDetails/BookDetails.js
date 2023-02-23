const BookDetails = ({book}) => {
  return (
    <div className="book-details">
        <h4>{book.title}</h4>
        <p><b>Author :</b> {book.author}</p>
        <p><b>Last read page :</b> {book.last_read_page}</p>
    </div>

  )
}

export default BookDetails