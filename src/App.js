import logo from './logo.svg';
import './App.css';

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

// - Here we have an array of objects
// - We might see this when we have multiple rows of results from our database or API
const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

// - This component displays the list of magazines
// - Because we're reading and displaying multiple objects, we need to use the .map method
// - magazines.map _maps_ each array item to the zine object until there are no more objects to map (it loops)
// - We then display properties from zine object in each iteration
function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'green'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

function Bookshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function MagicButton(){
  return(
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack />
      <Bookshelf />
      </header>
    </div>
  );
}

export default App;
