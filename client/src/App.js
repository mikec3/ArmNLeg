import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js'

function App() {
  return (
    <div className="App">
		    <BrowserRouter>
		      <Routes>
		        <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
		      </Routes>
		    </BrowserRouter>
    </div>
  );
}

export default App;
