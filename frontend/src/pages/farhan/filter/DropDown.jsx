

function DropDown({value, selection, setSelection, stateKey,openDropDown}) {

 const handleSelection = (item,stateKey) => {
    setSelection({...selection, [stateKey]: item})
    openDropDown[stateKey] = false
  }



  return (
    <div className="bg-[#647488] rounded-lg">

        <div className="text-white p-1">

          
       {
            value ? value.map((item, index) => (
                <div key={index} cursor="pointer" onClick={() => handleSelection(item, stateKey)}
                >
                    
                    <p >{item}</p>
                    

              
                </div>
            )) : "No Options Available"
       }

        </div>

     

    </div>
  )
}

export default DropDown