
import './App.css';
import Shaxboard from './components/Shaxboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';


function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<HomePage/>} />
    //       {/* <Route path="/game" element={<Shaxboard />} /> */}
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <Navbar></Navbar>
      <HomeSections></HomeSections>
    </div>
  );
}

export default App;
