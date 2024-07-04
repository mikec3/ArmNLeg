
import './App.css';
import FirstViz from './FirstViz';
import HarborviewXray from './HarborviewXray';
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
      <HarborviewXray />
    </div>
  );
}

export default Home;