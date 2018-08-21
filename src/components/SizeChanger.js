import React from 'react';

export default function SizeChanger(props) {
  console.log(props.textSize)
  return (
    <select 
    disabled={!props.editSize}className="dropDownContainer" onChange={(e) => props.updateSize(e.target.value)}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
      <option value="15"> 15 </option>
      <option value="16"> 16 </option>
      <option value="17"> 17 </option>
      <option value="18"> 18 </option>
      <option value="19"> 19 </option>
      <option value="20"> 20 </option>
    </select>
  )
}