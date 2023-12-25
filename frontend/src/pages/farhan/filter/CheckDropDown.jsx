import React from 'react';

function CheckDropDown({ value, selection, setSelection, stateKey }) {
  const handleSelection = (item) => {
    setSelection((prevSelection) => {
      const isSelected = prevSelection[stateKey].includes(item);
      return {
        ...prevSelection,
        [stateKey]: isSelected
          ? prevSelection[stateKey].filter((selectedItem) => selectedItem !== item)
          : [...prevSelection[stateKey], item],
      };
    });
  };

  return (
    <div className="bg-[#647488] rounded-lg">
      <div className="text-white p-1">
        {value ? (
          value.map((item, index) => (
            <div key={index} cursor="pointer">
              <input
                type="checkbox"
                id={`checkbox-${stateKey}-${index}`}
                value={item}
                checked={selection[stateKey].includes(item)}
                onChange={() => handleSelection(item)}
              />
              <label htmlFor={`checkbox-${stateKey}-${index}`}>{item}</label>
            </div>
          ))
        ) : (
          <p>No Options Available</p>
        )}
      </div>
    </div>
  );
}

export default CheckDropDown;
