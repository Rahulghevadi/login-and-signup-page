//import logo from './logo.svg';
import './index.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login'
import Signup from './components/Signup';
import { Route, BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-col2">
        <BrowserRouter>
        <Route  path="/" exact component={ Login } />
        <Route  path="/signup" exact component={Signup} />
        </BrowserRouter>
      </div>
      <div className="col">
        <hr color="black"/>
    </div>
      <Footer />
    </div> 
  );
}

