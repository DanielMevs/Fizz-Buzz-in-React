import './App.css';
import FizzBuzzCounter from './components/FizzBuzzCounter';
import FizzBuzzForm from './components/FizzBuzzForm';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active" href="#">Gift Shop</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Art Work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="#">Philanthropy</a>
        </li>
      </ul>
      <hr/>
      <h1 className="page-header">Fizz-Buzz 3.0 - <small>The Official Page</small></h1>
        <p class="lead">The Fizz, The Buzz, The Combination of the Two</p> <p> <mark>Fizz-Buzz 3.0-Fanatics Rejoice!</mark> Your <del>favorite</del> dream app is back with a bag full of React!</p>
        <hr/>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <img src="https://i.imgur.com/xLg6ty2.jpg" id="issac-portrait" />
            </div>
            <div className="col-md-7">
              <br/>
              <br/>
              <br/>
              <blockquote className="blockquote-reverse">
                  <p> "My 3.0<sup>rd</sup> law of motion is that every action has an equal and opposite 'REACT'ion." </p>
                  <footer>Quote by <cite>Isaac Newton, </cite> <em>Philosophiæ Naturalis Principia Mathematica</em>
                  </footer>
              </blockquote>
            </div>
        </div>
      </div>
      <hr/>
      <div className="container">
      <h2>About</h2>
      <br/>
        <div class="row">
            <div class="col-md-4">
                <p>Fizz-Buzz is a game where a number is translated into Fizz-Buzz logic, and then output to the user. 
                  There are three conditions it checks for. First, it checks if a number is equally divisible by both 
                  3 and 5. If it is, output "Fizz-Buzz".
                </p>
            </div>
            <div class="col-md-4">
                <p>Then it checks if the numbers are divisible by 3. If it is output "Fizz". Then it checks if it is divisible
                  by 5. If it is then output "Buzz". This page shows two different ways to play this game. The first is to enter
                  the number of numbers you
                </p>
            </div>
            <div class="col-md-4">
                <p>want to see the "Fizz-Buzz" algorithm act on. Upon submit, an alert with a list of "fizz-buzzed" numbers
                  will appear in your browser. This is quite normal. The other way is to increment or decrement the number you
                  want to "Fizz-Buzz".
                </p>
            </div>
        </div>
      </div>
      <hr/>
      <h2>Fizz-Buzz Form</h2>
      <br/>
      <div className="container">
        <div className="row">
          <FizzBuzzForm/>
        </div>
      </div>
      <br/>
      <hr/>
      <h2>Fizz-Buzz Counter</h2>
      <br/>
      <div className="container">
        <div className="row">
          <FizzBuzzCounter/>
        </div>
      </div>
      <hr/>
      <h2>Sponsors</h2>
      <div id="sponsor-forum">
        <Card url="https://i.imgur.com/CVkPZVc.jpg" title="Professor Catty McGee" text="President of the Feline Debugger's Association of America."/>
        <Card url="https://i.imgur.com/xJOM7YBb.jpg" title="Scrappy Cocoa" text="Formerly known as the Zohan, Scrappy can
        put down some serious Fizzy Bubblech."/>
      </div>
      <hr/>

      <footer>
        <p>Post by: Daniel Mevs, <cite>Fizz-Buzz 3.0 Creator</cite></p>
        <p>Contact information: <a href="dannymevs@hotmail.com">
        dannymevs@hotmail.com</a></p>
        <p>Copy-right: Fizz-Buzz Dynasty LLC &#169; </p>
        <hr/>
      </footer>
    </div>
  );
}


export default App;
