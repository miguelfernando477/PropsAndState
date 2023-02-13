import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// write your Color component here\
const Color = (props) => {
 
  return (
    <div className={ props.color === props.selectedColor ? `selected ${props.color}` : props.color}  onClick={() => props.selectColor(props.color)} />
  )
}

const Picker = () => {
  const [selectedColor, setSelectedColor] =useState('')
  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color='red' selectColor={selectColor} selectedColor={selectedColor}/>
        <Color color='green' selectColor={selectColor} selectedColor={selectedColor}/>
        <Color color='violet' selectColor={selectColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);