import React from 'react';

class FizzBuzzCounter extends React.Component{
    render(){
      return(
        <div>
          <Actions />
        </div>
      );
    }
  };
  
  class Actions extends React.Component{
    state = {
      count: 1
    };
  
    handleDecrement = () => {
  
      if(this.state.count > 1){
        this.setState(
          (prevState) =>({count: prevState.count - 1})
        )
      }
    };
  
    handleIncrement = () => {
  
      this.setState(
        (prevState) => ({count: prevState.count + 1})
      );
  
    };
  
    render(){
      return(
        <div>
          <h4> 
            { 
              (this.state.count % 15 === 0) ? this.state.count +", FizzBuzz" :
              (this.state.count % 3 === 0)  ? this.state.count +", Fizz"     : 
              (this.state.count % 5 === 0)  ? this.state.count +", Buzz"     : 
              this.state.count
            }
          </h4>
          <button  className="btn btn-primary" onClick={this.handleDecrement}>-</button>
          <button className="btn" onClick={this.handleIncrement}>+</button>
        </div>
      );
    }
  }

  export default FizzBuzzCounter;