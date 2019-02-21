import React from 'react';
import store from '../store';
import DropdownOption from './DropdownOption';

export default function SelectDropdown(props) {

  let tableContentNames = props.tableContent.map(currency => currency.name);

  const hideOptionCheck = (name) => {
    return tableContentNames.includes(name);
  }

  let options = props.currencies.map(currency => <DropdownOption
                                                  name={ currency.name }
                                                  value={ currency.id }
                                                  hide={ hideOptionCheck(currency.name) }
                                                  />);

  return (
    <div className="select-wrapper">
      <form>
        <select onChange={props.add}>
          <option value="" selected disabled hidden>Add to Tracker</option>
          { options }
        </select>
      </form>
    </div>
  )
}
