import React from 'react';

class FizzBuzzForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      let fizzBuzzArr = [];
      for (let index = 1; index <= this.state.value; index++) {
        if(index % 3 === 0 && index % 5 === 0){
          fizzBuzzArr.push(" Fizz Buzz");
        }
        else if(index % 3 === 0){
          fizzBuzzArr.push(" Fizz");
        }
        else if(index % 5 === 0){
          fizzBuzzArr.push(" Buzz");
        }
        else if(index === 1){
          fizzBuzzArr.push(index);
        }
        
        else{
          fizzBuzzArr.push(' ' + index);
        }
        
      }
      alert('A Fizz-Buzz game for ' + this.state.value + ': ' + '\n' + fizzBuzzArr.toString());
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Number to Fizz-Buzz to-> 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      );
    }
  }

  export default FizzBuzzForm;