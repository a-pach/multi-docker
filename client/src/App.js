import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

exports.error404 = function(req, res) {
  if (req.accepts('html')) {
      // Respond with html page.
      fs.readFile(__dirname + '/../../public/404/index.html', 'utf-8', function(err, page) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write(page);
          res.end();
      });
  }
  else if (req.accepts('json')) {
      // Respond with json.
      res.status(404).send({ error: 'Not found' });
  }
  else {
      // Default to plain-text. send()
      res.status(404).type('txt').send('Not found');
  }
};

export default App;
