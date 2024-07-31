import './App.css';
import {Image} from 'react';
import HeadCT from './img/Head CT Edited.png'
import HeadMRI from './img/Head MRI.jpeg'
import HeadXray from './img/Skull Xray.jpeg'

function HeadImaging() {
  return (
    <div className='FirstViz'>
      <h2 id="R&B">Head Imaging Costs - low fidelity to high</h2>
      <div className='TextBox'>
        <h4>X-Ray</h4>
        <h4>CT</h4>
        <h4>MRI</h4>
      </div>

      <div className='SideBySide'>
        <img src={HeadXray} />
        <img src={HeadCT} />
        <img src={HeadMRI} />
      </div>
      <div className='TextBox'>
        <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>$531*</p> </a>
        <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>$2,058**</p> </a>
         <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>$6,041***</p> </a>
      </div>
      <div className='NotesBox'>
         <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>* Harborview X-Ray Skl less than 4 Views 3200022 </p> </a>
        <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>** Harborview CT Head/BRN C+ MATRL 3500015</p> </a>
        <a href="https://www.uwmedicine.org/sites/stevie/files/cms-mrf/911631806_harborview-medical-center_standardcharges.json
          " target="_blank"><p>*** Harborview MRA Head C+ MATRL 6100007</p> </a>
      </div>
    </div>
  );
}

export default HeadImaging;