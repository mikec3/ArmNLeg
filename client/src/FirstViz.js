import './App.css';
import roomCompareImage from './HarborviewR&BVSAirbnb.png'
import {Image} from 'react';

function FirstViz() {
  return (
    <div className='FirstViz'>
      <h2 id="R&B">Hospital Room VS AirBnb (per night)</h2>
      <div className='TextBox'>
        <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>$3,264*</p> </a>
          <a href="https://www.airbnb.com/rooms/949350333467771973?check_in=2024-09-03&check_out=2024-09-05&guests=1&adults=1&s=67&unique_share_id=2f5992fb-05a3-4f06-9991-e3bcbbce0f86
          " target="_blank"><p>$999**</p> </a>
      </div>
      <img src={roomCompareImage} />
      <div className='NotesBox'>
      <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>* Harborview Medical Center Level 1 Room & Board per night</p> </a>
        <a href="https://www.airbnb.com/rooms/949350333467771973?check_in=2024-09-03&check_out=2024-09-05&guests=1&adults=1&s=67&unique_share_id=2f5992fb-05a3-4f06-9991-e3bcbbce0f86
          " target="_blank"><p>** Seattle Area 6 bedroom Airbnb per night</p> </a>
      </div>
    </div>
  );
}

export default FirstViz;