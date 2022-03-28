import {useState, useEffect} from "react";
import Cookies from 'js-cookie';

function App() {
  const [books, setBooks] = useState(null)

  const handleError = (err) => {
    console.warn(err);
  };

  const addReview = async () => {
    const review = {
      text: "Lorem ipsum doksdfohdfkoshostrgjierakfpsdakfsdoktoerkpfwlefpweafpwelfpwelfpewlf",
      book: 3,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": Cookies.get('csrftoken'),
      },
      body: JSON.stringify(review),
    }

    const response = await fetch(`/api/v1/books/${review.book}/reviews/`, options).catch(handleError);

    if(!response.ok) {
      throw new Error("Network response was not OK!");
    }

  }
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('/api/v1/books/').catch(handleError);
      if(!response.ok) {
        throw new Error('Network response was not OK!')
      } else {
        const data = await response.json();
        setBooks(data);
      };
    };

    getBooks();
  }, []);

  if (!books) {
    return <div>Fetching data...</div>
  }

  const booksHTML = books.map(book => (
    <li key={book.id}>
      <h3>{book.title}</h3>
    </li>
  ))

  return (
    <>
      <ul>
        {booksHTML}
      </ul>
      <button onClick={addReview}>Add review</button>
    </>
  );
};

export default App;
