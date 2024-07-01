import './App.css';
import Header from './Header'

function About() {
  return (
    <div className="App">
        <Header />
        <h3> The Problem:</h3>
        <p> Healthcare costs are a big problem for the average person. It's hard to shop for services, and find pricing.</p>
        <p> The Hospital Price Transparancy Law requires hospitals to post their prices, but 
            the required machine readable file isn't consumer friendly, and only a limited number of services are required to be easily shoppable.</p>
        <h3> The Solution: </h3>
        <p> This project's mission is to create user friendly tools to explore hospital costs. Vizualizations
            and tools will be posted here, working towards the ultimate goal of delivering valuable insights to consumers.
        </p>
        

    </div>
  );
}

export default About;