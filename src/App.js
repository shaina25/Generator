import React from "react";
import QA from "./QA";
import names from './data';
import fnames from './data2';
import "./App.css";
import them from './themes';
import sits from './situations';
import chars from './char';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: names[0].name,
      fname: fnames[0].fname,
      theme: them[0].theme,
      sit: sits[0].sit, 
      character: chars[0].character
    
    };
  }
    
  
  randomQuote2() {
    const randomNumber = Math.floor(Math.random() * them.length);
    return them[randomNumber]
  }
  randomQuote3() {
    const randomNumber = Math.floor(Math.random() * sits.length);
    return sits[randomNumber]
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  
  handleClick2 = () => {
    const generateRandomtheme = this.randomQuote2();
    this.setState({
      theme: generateRandomtheme.theme,
    });
    this.shuffleQuotes(them)
  };
  handleClick3 = () => {
    const generateRandomsit = this.randomQuote3();
    this.setState({
      sit: generateRandomsit.sit,
    });
    this.shuffleQuotes(sits)
  };
  
 

  randomColor() {
    const color = 'limegreen'
    return color;
  }
  randomColor2() {
    const color = 'black'
    return color;
  }
  randomColor3() {
    const color = 'darkgreen'
    return color;
  }

  
  render() {
    return (
      <div>
        <h1>
          GENERATOR
        </h1>
        <QA
          displayColor={this.randomColor}
          handleClick2={this.handleClick2}
          handleClick3={this.handleClick3}
          displayColor1={this.randomColor2}
          displayColor2={this.randomColor3}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;