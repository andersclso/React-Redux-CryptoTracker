import React from 'react';

export default function DropdownOption(props) {
  return (
    <option key={props.key} value={props.value} className={ props.hide && 'hide' }>{props.name}</option>
  )
}
