import React from 'react';

export default function FamilyChanger(props) {
  console.log('family fonts',props)
  return (
    <select className="dropDownContainer" disabled={!props.editFamily}
      onChange={(e)=>props.updateFamily(e.target.value)}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
      <option value="sans"> Sans </option>
    </select>
  )
}