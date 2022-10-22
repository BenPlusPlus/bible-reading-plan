import './App.css'
import { BookList } from './models/biblebook'

function App() {

  return (
    <div className="App">
      <h1>Bible Reading Plan</h1>

      <div className="legend">
        <div className="week header">
          <div className="day">Sunday</div>
          <div className="day">Monday</div>
          <div className="day">Tuesday</div>
          <div className="day">Wednesday</div>
          <div className="day">Thursday</div>
          <div className="day">Friday</div>
          <div className="day">Saturday</div>
        </div>
        <div className="week">
          <div className="day">Poetry</div>
          <div className="day">The Pentateuch</div>
          <div className="day">Old Testament History, part 1</div>
          <div className="day">Old Testament History, part 2</div>
          <div className="day">Old Testament Prophets</div>
          <div className="day">New Testament History</div>
          <div className="day">New Testament Letters</div>
        </div>
      </div>

      <div className="testament">
        The Old Testament
      </div>

      <div className="reading-section">
        <div className="header">
          The Pentateuch
        </div>
        {BookList.filter(b => b.category == 'The Pentateuch').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

      <div className="reading-section">
        <div className="header">
          Old Testament History, part 1
        </div>
        {BookList.filter(b => b.category == 'Old Testament History, part 1').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

      <div className="reading-section page-break">
        <div className="header">
          Old Testament History, part 2
        </div>
        {BookList.filter(b => b.category == 'Old Testament History, part 2').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

      <div className="reading-section">
        <div className="header">
        Poetry
        </div>
        {BookList.filter(b => b.category == 'Poetry').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

      <div className="reading-section page-break">
        <div className="header">
        Old Testament Prophets
        </div>
        {BookList.filter(b => b.category == 'Old Testament Prophets').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

      <div className="testament">
        The New Testament
      </div>

      <div className="reading-section">
        <div className="header">
        New Testament History
        </div>
        {BookList.filter(b => b.category == 'New Testament History').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

      <div className="reading-section">
        <div className="header">
        New Testament Letters
        </div>
        {BookList.filter(b => b.category == 'New Testament Letters').map((book) => (
          <div className="bible-book">
            <div className="book-name">{book.name}</div>
            <div className="book-chapters">{
              [...Array(book.chapters)].map((x, i) => <div className="chapter">{i+1}</div>)
            }</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
