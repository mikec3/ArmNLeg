
import './App.css';
import FirstViz from './FirstViz';
import HarborviewXray from './HarborviewXray';
import HeadImaging from './HeadImaging'
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
      <HeadImaging/>
    </div>
  );
}

export default Home;