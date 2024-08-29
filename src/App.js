
import './App.css';
import Shaxboard from './components/Shaxboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';


function App() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar></Navbar>
      <HomeSections ></HomeSections>
      <div className='bg-[#F1F6F1]'>
        <div className='p-8'></div>
        <Shaxboard></Shaxboard>
        <div className='pt-8'></div>
      </div>
    </div>
  );
}

export default App;
