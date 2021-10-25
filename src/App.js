import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Aboutpage from './components/Pages/Aboutpage/Aboutpage';
import Enrolpage from './components/Pages/Enrolpage/Enrolpage';
import Homepage from './components/Pages/Homepage/Homepage';
import SignUpPage from './components/Pages/SignUpPage/SignUpPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './globalStyles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <Navbar />
            <Homepage />
            <Aboutpage />
            <Enrolpage />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
