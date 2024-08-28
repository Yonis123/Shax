
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
      <div className='bg-[#F1F6F1]'>
        <div className='p-8'></div>
        <Shaxboard></Shaxboard>
        <div className='pt-8'></div>
      </div>
    </div>
  );
}

export default App;
