import './App.css';
import Header from './Header'
import HarborviewJSONCharges from './img/HarborviewJSONCharges.png'
import HarborviewShoppableScreenShot from './img/HarborviewShoppableScreenShot.png'
import HarborviewXray from './img/HarborviewXray.png'


function About() {
  return (
    <div className="App">
        <Header />
        <h3> The Problem:</h3>
        <p> Healthcare costs are a problem in many ways, understanding them being one. <br/>
         The Hospital Price Transparancy Law requires hospitals to post their prices, but 
            the required machine readable file isn't consumer friendly, and only a limited number of services are required to be easily shoppable.</p>
        <div className='SideBySide'>
            <div>
                <h4> Machine Readable File posted by all hospitals</h4>
                <p> Consumers are unable to decipher these without aggregating services like this website.</p>
            </div>
            <img src={HarborviewJSONCharges} />
        </div>

        <div className='SideBySide'>
            <img src={HarborviewShoppableScreenShot} />
            <div>
                <h4> 300 Shoppable Services </h4>
                <p> List of easily shoppable services is relatively small. Consumers will find it difficult
                    to compare costs between hospitals.
                </p>
            </div>
        </div>

        <h3> The Solution: </h3>

        <p> Create user friendly tools to explore and compare hospital costs.</p>
        <div>
            <img src={HarborviewXray} />
        </div>

    </div>
  );
}

export default About;