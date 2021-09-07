import React from 'react'
import { Link, Route } from 'react-router-dom';
import './App.css'
import Info from './components/Info';
import Home from './components/Home';
import PayHere from './components/Payhere';
import Payment from './components/Payment';



function App() {

  return (
          
      <div className="header">
        
        <Link to="/info">scan & pay</Link>
        

        <Route path="/info" component={Info} />
        <Route path="/home" component={Home} />
        <Route path="/payhere" component={PayHere} />
        <Route path="/payment" component={Payment} /> 
      </div>
  );
}

export default App;
