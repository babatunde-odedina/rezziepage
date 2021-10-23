import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Aboutpage from './components/Pages/Aboutpage/Aboutpage';
import Enrolpage from './components/Pages/Enrolpage/Enrolpage';
import Homepage from './components/Pages/Homepage/Homepage';
import './globalStyles.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Enrolpage />
      <Footer />
    </div>
  );
}

export default App;
