import React from "react";
import names from './data';
import fnames from './data2';
import chars from './char';
import sits from './situations';
 

class QA extends React.Component {
   
  constructor() {
    
    super();
    this.state = {
      selected_gender: 'f',
      selected_country: 'India',
      name: names[0].name,
      fname: fnames[0].fname,
      sit:sits[0].sit,
      character:chars[0].character,
      selected_category: 'Elf',
      selected_fgender: 'female',
      selected_cgender: 'female',
      selected_choice:'negative'

   };
  }
  genderChange = (e) => {
    console.log(e.target.value);
    this.setState({selected_gender:e.target.value});

  }
  countryChange = (e) => {
    console.log(e.target.value);
    this.setState({selected_country:e.target.value});
  }
  categoryChange = (e) => {
    console.log(e.target.value);
    this.setState({selected_category:e.target.value});
  }
  fgenderChange = (e) => {
    console.log(e.target.value);
    this.setState({selected_fgender:e.target.value});
  }
  cgenderChange = (e) => {
    console.log(e.target.value);
    this.setState({selected_cgender:e.target.value});
  }
  sgenderChange = (e) => {
    console.log(e.target.value);
    this.setState({selected_choice:e.target.value});
  }
  
  
  

  render() {
    const randomColor = this.props.displayColor();
    const randomColor2 = this.props.displayColor1();
    const randomColor3 = this.props.displayColor2();
    const html = document.documentElement;
    const country=['India','Russia','America','Egypt','Japan'];
    const category=['Elf','Wizard','Vampire','Dragon','Witch','Fairy','Superhero','Villain'];
    html.style.backgroundColor = randomColor;

    const filterCombiner = (d, filterArray) => {
      for (let fn of filterArray) {
        if (!fn(d)) {
          return false;
        }
      }
      return true;
    }

    
    const filterArray1 = [
      d => d.gender === this.state.selected_gender,
      d => d.country === this.state.selected_country

    ];
    const arr1 = names.filter(d => filterCombiner(d, filterArray1));
    console.log(arr1);
    const filterArray2 = [
      d => d.fgender === this.state.selected_fgender,
      d => d.category === this.state.selected_category

    ];
    const arr2 = fnames.filter(d => filterCombiner(d, filterArray2));
    console.log(arr2);
    const filterArray3 = [
      d => d.cgender === this.state.selected_cgender

    ];
    const arr3 = chars.filter(d => filterCombiner(d, filterArray3));
    console.log(arr3);

    const filterArray4 = [
      d => d.choice === this.state.selected_choice

    ];
    const arr4 = sits.filter(d => filterCombiner(d, filterArray4));
    console.log(arr4);

    let handleClick = () => {
    
      const randomNumber = Math.floor(Math.random() * arr1.length);
       
      this.setState({
        name: arr1[randomNumber].name
        });
    };
    let fhandleClick = () => {
    
      const randomNumber = Math.floor(Math.random() * arr2.length);
       
      this.setState({
        fname:arr2[randomNumber].fname
        });
    };
    let chandleClick = () => {
    
      const randomNumber = Math.floor(Math.random() * arr3.length);
       
      this.setState({
        character:arr3[randomNumber].character
        });
    };
    let shandleClick = () => {
    
      const randomNumber = Math.floor(Math.random() * arr4.length);
       
      this.setState({
        sit:arr4[randomNumber].sit
        });
    };

    return (
      <div>
   
      <div style={{ backgroundColor: "white" }} className="box3">
         
         <div  
           key={Math.random()}
           style={{ color: randomColor2 }}
         >
           <h2 id="name">"{this.state.name}"</h2>
           
           
         </div>
         <label for="gender">Choose a gender :</label>

           <select id="gender" onChange={this.genderChange}>
           <option value='f'>Female</option>
           <option value= 'm'>Male</option>
          </select> 
         <button
           style={{ backgroundColor: randomColor3 }}
           id="newtext"
           onClick={handleClick}>
           Human Name
         </button>
         <label for="countries">Choose a country : </label>

           <select id="countries" onChange={this.countryChange}>
           {country.map((value)=>{
             return <option value={value}>{value}</option>;
           })}
          </select> 
       
         </div>
         <div style={{ backgroundColor: "white" }} className="box3">
         
         <div  
           key={Math.random()}
           style={{ color: randomColor2 }}
         >
           <h2 id="fname">"{this.state.fname}"</h2>
           
           
         </div>
         <label for="fgender">Choose a gender :</label>

           <select id="fgender" onChange={this.fgenderChange}>
           <option value='female'>Female</option>
           <option value= 'male'>Male</option>
          </select> 
         <button
           style={{ backgroundColor: randomColor3 }}
           id="newtext"
           onClick={fhandleClick}>
           Fantasy Name
         </button>
         <label for="categories">Choose a category : </label>

           <select id="categories" onChange={this.categoryChange}>
           {category.map((value)=>{
             return <option value={value}>{value}</option>;
           })}
          </select> 
       
         </div>
    <div style={{ backgroundColor: "white" }} className="box3">
         
    <div
      
      key={Math.random()}
      style={{ color: randomColor2 }}
    >
      <h2 id="character">"{this.state.character}"</h2>
    </div>
    <label for="cgender">Choose a gender :</label>

        <select id="cgender" onChange={this.cgenderChange}>
        <option value='female'>Female</option>
        <option value= 'male'>Male</option>
        </select> 
    <button
      style={{ backgroundColor: randomColor3 }}
      id="newtext"
      onClick={chandleClick}
    >
      New Character
    </button>
  
    </div>
    
    
         
    
    <div style={{ backgroundColor: "white" }} className="box3">
         
    <div
      
      key={Math.random()}
      style={{ color: randomColor2 }}
    >
      <h2 id="sit">"{this.state.sit}"</h2>
    </div>
    <label for="choice">Your Choice  :</label>

        <select id="choice" onChange={this.sgenderChange}>
        <option value='positive'>Positive</option>
        <option value= 'negative'>Negative</option>
        </select> 
    <button
      style={{ backgroundColor: randomColor3 }}
      id="newtext"
      onClick={shandleClick}
    >
      New Situation
    </button>
  
    </div>
    <div style={{ backgroundColor: "white" }} className="box3">
         
    <div
      
      key={Math.random()}
      style={{ color: randomColor2 }}
    >
      <h2 id="theme">"{this.props.theme}"</h2>
    </div>
    <button
      style={{ backgroundColor: randomColor3 }}
      id="newtext"
      onClick={this.props.handleClick2}
    >
      New Theme
    </button>
  
    </div>


  
</div>
    );
  }
}

export default QA;