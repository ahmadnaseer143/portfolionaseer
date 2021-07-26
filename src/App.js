import About from './About';
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Experience from './Experience';
import Education from './Education';
import Services from './Services';
import Contact from './Contact';
import Testimonials from './Testimonials';
function App() {
  return (
    <main className="main">
      <Navbar />
      <Welcome />
      <About />
      <Experience />
      <Education />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

export default App;
