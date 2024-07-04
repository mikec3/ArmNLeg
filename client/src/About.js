import './App.css';
import Header from './Header'
import FirstViz from './FirstViz';
import HarborviewXray from './HarborviewXray';

function About() {
  return (
    <div className="App">
        <Header />
        <h3> The Problem:</h3>
        <p> Healthcare costs are a problem in many ways, understanding them being one. <br/>
         The Hospital Price Transparancy Law requires hospitals to post their prices, but 
            the required machine readable file isn't consumer friendly, and only a limited number of services are required to be easily shoppable.</p>
        <h3> The Solution: </h3>
        <p> Create user friendly tools to explore and compare hospital costs.</p>

    </div>
  );
}

export default About;