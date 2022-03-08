import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');
  const url = 'https://type.fit/api/quotes';

  useEffect(() => {
    fetchQuotes();
  },[]);

  async function fetchQuotes() {
    const response = await axios.get(url);
    const quote = response.data;
    const id = Math.floor(Math.random()*1642)
    console.log(quote[id])

    setQuote(quote[id].text);
    setAuthor(quote[id].author);
  }
  return (
    <div className="app">
        <div className="card">
          <h3 className="heading">{quote}</h3>
          <p className="author">-- {author}</p>
          <button className="button" onClick={fetchQuotes}>
            <span>GIVE ME A QUOTE!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
