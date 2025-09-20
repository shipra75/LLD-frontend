import React, { useState } from 'react';
import './App.css'; // Make sure this file contains the CSS from below

const data = [
  { id: 1, title: 'Option 1' },
  { id: 2, title: 'Option 2' },
  { id: 3, title: 'Option 3' },
  { id: 4, title: 'Option 4' },
  { id: 5, title: 'Option 5' },
];

const MultiSelectDropdown = ({ options, selected, toggleOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedTitles = options
    .filter(option => selected.includes(option.id))
    .map(option => option.title)
    .join(', ') || 'Select options';

  return (
    <div
      className={`c-multi-select-dropdown ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="c-multi-select-dropdown__selected">
        <span>{selectedTitles}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="arrow" />
      </div>

      <ul className="c-multi-select-dropdown__options">
        {options.map(option => {
          const isSelected = selected.includes(option.id);
          return (
            <li
              key={option.id}
              className="c-multi-select-dropdown__option"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown from closing
                toggleOption(option.id);
              }}
            >
              <input
                type="checkbox"
                className="c-multi-select-dropdown__option-checkbox"
                checked={isSelected}
                readOnly
              />
              <span>{option.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Page = () => {
  const [selected, setSelected] = useState([]);

  const toggleOption = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ padding: '40px' }}>
      <h3>Multi Select Dropdown</h3>
      <MultiSelectDropdown
        options={data}
        selected={selected}
        toggleOption={toggleOption}
      />
    </div>
  );
};

export default Page;
