// Dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components to render
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import BlogPost from './Components/BlogPost/BlogPost';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={BlogPost} />
        <Route exact path="/contact" component={Contact} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
