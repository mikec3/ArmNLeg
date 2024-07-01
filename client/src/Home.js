
import './App.css';
import FirstViz from './FirstViz';
import Header from './Header'

function Home() {
  return (
    <div className="App">
        <Header />
      <header className="App-Modal">
        <p>
          Healthcare prices shouldn't be a secret.
        </p>

      </header>

      <FirstViz/>
    </div>
  );
}

export default Home;