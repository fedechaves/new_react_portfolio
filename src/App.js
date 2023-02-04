import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
      <Header/>
      
      <main className='main'>
        <Header />
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
