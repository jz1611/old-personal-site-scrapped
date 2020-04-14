// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components to render
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Incorrect from './Components/Incorrect/Incorrect';

// CSS
import './App.css';

function App() {
  return (
    <div id="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route path ="/" component={Incorrect} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
