import './App.css';
import About from './components/About';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='bg-white shadow dark:bg-gray-800'>
      <div class="container-fluid px-6  mx-auto  ">
      <Navbar />
      <Hero />
      {/* <Testimonial /> */}
      <About />
      <Footer />
      </div>
    </div>
  );
}

export default App;
