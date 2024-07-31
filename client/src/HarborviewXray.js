import './App.css';
import xRayImage from './img/HarborviewXray.png'
import {Image} from 'react';

function HarborviewXray() {
  return (
    <div className='FirstViz'>
      <h2 id="Xray">X-Ray Charges*</h2>
      <img src={xRayImage} />
      <div className='NotesBox'>
      <p>* Harborview Medical Center X-Ray Charges, minimum views for each (2023).</p>
      </div>
    </div>
  );
}

export default HarborviewXray;