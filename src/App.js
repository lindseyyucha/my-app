import './App.css';

const movies = [
  { id: 1, title: 'Star Wars: Episode II - Attack of the Clones', director: 'George Lucas', year: '2002' },
  { id: 2, title: 'The Crow', director: 'Alex Proyas', year: '1994' },
  { id: 3, title: 'The Craft', director: 'Andrew Fleming', year: '1996' }
];

function MovieList() {
  const listMovies = movies.map(movie => (
    <li key={movie.id}>
      {movie.title} ({movie.year}) - Directed by {movie.director}
    </li>
  ));
  return (
    <div>
      <h2>List of Movies</h2>
      <ul>{listMovies}</ul>
    </div>
  );
}


function FeaturedItem() {
  const featuredMovie = movies[0];

  return (
    <div>
      <h2>Featured Movie</h2>
      <p>{featuredMovie.title} ({featuredMovie.year}) - Directed by {featuredMovie.director}</p>
    </div>
  );
}


function SpecialOffer() {
  const isSpecialOfferAvailable = parseInt(movies[0].year) > 1994;

  return (
    <div>
      <h2>Special Offer</h2>
      {isSpecialOfferAvailable ? (
        <p>Get 20% off on your next purchase on the featured movie!</p>
      ) : (
        <p>No special offer available at the moment.</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
        <FeaturedItem />
        <SpecialOffer />
      </header>
    </div>
  );
}

export default App;
