import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Service from './Components/Service';
import Appointment from './Components/Appointment';
import Gallery from './Components/Gallery';
import Team from './Components/Team';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
   <>
    <Topbar/>
    <Header/>
    <Banner/>
    <About/>
    <Service/>
    <Appointment/>
    <Gallery/>
    <Team/>
    <Blog/>
    <Contact/>
    {/* <Subscribe/> */}
    <Footer/>
   </>
  );
}

export default App;
