import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects.js'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
