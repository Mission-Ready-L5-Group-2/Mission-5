function CheckDropDown({ value, selection, setSelection, stateKey, openDropDown }) {
    const handleSelection = (item) => {
      const isSelected = selection[stateKey].includes(item);
      const isAllSuburbsSelected = selection[stateKey].includes("All Suburbs");
  
      if (item === "All Suburbs" && !isAllSuburbsSelected) {
        // If "All Suburbs" is clicked and not selected, select all options
        setSelection({
          ...selection,
          [stateKey]: value || [],
        });
      } else if (item === "All Suburbs" && isAllSuburbsSelected) {
        // If "All Suburbs" is clicked and already selected, deselect all options
        setSelection({
          ...selection,
          [stateKey]: [],
        });
      } else {
        // Toggle the selection of the clicked item
        setSelection({
          ...selection,
          [stateKey]: isSelected
            ? selection[stateKey].filter((selectedItem) => selectedItem !== item)
            : [...selection[stateKey], item],
        });
      }
  
   
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
  