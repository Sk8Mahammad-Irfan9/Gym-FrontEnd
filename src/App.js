// import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Feature } from './components/Feature';
import { Offer } from './components/Offer';

import "./index.css"
import { About } from './components/About';
import { Contact } from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      
    </div>
  );
}

export default App;
