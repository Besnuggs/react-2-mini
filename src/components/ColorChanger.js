import React from 'react';

export default function ColorChanger(props) {
  console.log('Color props', props);
  return (
    <select className="dropDownContainer" disabled={!props.editColor} onChange={(e) => props.updateColor(e.target.value)}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="pink"> Pink </option>
      <option value="red"> Red </option>
      <option value="magenta"> Magenta </option>
      <option value="violet"> Violet </option>
      <option value="skyblue"> Skyblue </option>
      <option value="orange"> Orange </option>
    </select>
  )
}