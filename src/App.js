import React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import Section from './components/Section';
import './style.css'
import Sectiontwo from "./components/Sectiontwo"
import SectionThree from "./components/SectionThree"
import SectionFour from "./components/SectionFour"
import SectionFive from "./components/SectionFive"
import SectionSix from "./components/SectionSix"
import Footer from './components/Footer'

function App() {
  return(
    <>
    <Appbar />
    <Section />
     <Sectiontwo/>
     <SectionThree/>
     <SectionFour/>
     <SectionFive/>
     <SectionSix/>
     <Footer/>
    </>
  )

}

export default App;
