import React from 'react';
import './App.css';
import duke from './duke.jpg';
import perry from './perry.jpg';
import tubby from './tubby.jpg';
import whiskey from'./whiskey.jpg';
import DogList from './DogList';
import { BrowserRouter } from 'react-router-dom';

const dogs =  
 [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]

///
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <DogList dogs={dogs} />
        {/**a way of overriding a prop in a particular component eg. <DogList dogs ={[]} props = {{...props}} />  */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
