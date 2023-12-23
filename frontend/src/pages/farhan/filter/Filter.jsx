import x from "../../../assets/filter/x.svg";
import search from "../../../assets/homepage/search.svg";
import Button from "./Button";

import { useState } from "react";
import DropDown from "./DropDown";
import CheckDropDown from "./CheckDropDown";




function Filter({filterOpen, setFilterOpen, properties}) {

    //Toggle Dropdown menus
    const [openDropDown, setOpenDropDown] = useState(
        {
            location: false,
            district: false,
            suburb: false,
            price1: false,
            price2: false,
            bedroom: false,
            bathroom: false,
            propertyType: false,
        }
    )


    const handleButton = (name) => {

        const newOpenDropDown = {
            location: false ,
            district: false,
            suburb: false,
            price1: false,
            price2: false,
            bedroom: false,
            bathroom: false,
            propertyType: false,

        }

        newOpenDropDown[name] = !openDropDown[name]

        setOpenDropDown(newOpenDropDown)
    }

   

    //Get all cities from fetched data
    const cities = properties.map((property) => property.address.city)
    //Remove duplicates
    const uniqueCities = [...new Set(cities)]

    //Load data from loader into the dropdown options
    const [selection, setSelection] = useState( {
        location: "All Locations",
        district: "All Districts",
        suburb: ["All Suburbs"],
        price1: "Any",
        price2: "Any",
        bedroom: "Any",
        bathroom: "Any",
        propertyType: "Any",
        availableNow: false,
        petsOk: false,
    })  


    //Get district basaed on selected city
    const districts = properties.filter((property) => {
        if (property.address.city === selection.location || selection.location === "All Locations") {
            return property.address.district
        }
    })
    const uniqueDistricts = [...new Set(districts.map((district) => district.address.district))]

    //Get suburb based on selected district
    const suburbs = properties.filter((property) => {
        if (property.address.district === selection.district || selection.district === "All Districts") {
            return property.address.suburb
        }
    })
    const uniqueSuburbs = [...new Set(suburbs.map((suburb) => suburb.address.suburb))]

    //Pass prices 
    const prices = ["$0", "$100", "$200", "$300", "$400", "$500+"]

    //handle case if price 1 is greater than price 2
    if (selection.price1 > selection.price2) {
        setSelection({...selection, price2: selection.price1, price1: selection.price2})
    }

    //Bedrooms and bathrooms dropdowns
    const rooms = ["Any", "1", "2", "3", "4+"]


    //handle property types dropdown
    const propertyTypes = ["Any", "Apartment", "House", "Townhouse", "Unit"]

   //Convert selected suburbs to array with , 
    const selectedSuburbs = selection.suburb.join(", ")



  return (

    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 h-screen w-screen bg-transparent  flex justify-center items-center">
    <div className="w-[375px] h-[673px] flex flex-col bg-[#ffffff] border border-black rounded-md">
        <div className="bg-[#1b7fc8] p-4 flex gap-3 items-center">
            <div className="rounded-full bg-[#eef1f4] p-2" onClick={() => setFilterOpen(!filterOpen)}>
            <img src={x} alt="cross" ></img>
            </div>
            <p className="text-white font-bold text-xl">Search properties for rent</p>
        </div>

        <div className="flex flex-col gap-4 p-2">
            <p className="text-sm font-bold">Location</p>
            <div className="flex gap-2">

            <Button value={selection.location} handleButton={handleButton} name={"location"}
        
            />
            {
                openDropDown.location ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-9 w-[192px]">
                     <DropDown value ={uniqueCities} selection={selection}
                        setSelection={setSelection} stateKey="location"
                        openDropDown={openDropDown}
                     />
                </div>
                    ) : ""
            }

            <Button value={selection.district} handleButton={handleButton} name={"district"}/>
            {
                openDropDown.district ?  (
                 <div className="bg-[#ffffff] absolute z-50 mt-9 w-[160px] ml-[200px]">
                     <DropDown value={uniqueDistricts} selection={selection}
                        setSelection={setSelection} stateKey="district"  openDropDown={openDropDown}/>
                </div>
                    ) : ""
            }
           
            </div>

            <Button value={selectedSuburbs} name={"suburb"} handleButton={handleButton}/>
            {
                openDropDown.suburb ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-[121px] w-[357px]">
                     <CheckDropDown value={uniqueSuburbs} stateKey="suburb" selection={selection}
                        setSelection={setSelection} openDropDown={openDropDown}/>
                </div>
                    ) : ""
            }

            <p className="text-sm font-bold">Price</p>
            <div className="flex gap-2">
            <Button value={selection.price1} name={"price1"} handleButton={handleButton}/>
            {
                openDropDown.price1 ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-[36px] w-[168px]">
                     <DropDown value={prices} stateKey="price1" selection={selection}
                        setSelection={setSelection} openDropDown={openDropDown} />
                </div>
                    ) : ""
            }
            <span> - </span>
            <Button value={selection.price2} name={"price2"} handleButton={handleButton}/>
            {
                openDropDown.price2 ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-[36px] w-[168px] ml-[190px]">
                     <DropDown value={prices} stateKey="price2" selection={selection}
                        setSelection={setSelection} openDropDown={openDropDown}
                     />
                </div>
                    ) : ""
            }
            </div>

            <div className="flex flex-grow gap-5">
            <div className="flex-grow">
            <p className="text-sm font-bold">Bedrooms</p>
            <Button value={selection.bedroom} name={"bedroom"} handleButton={handleButton}/>
            {
                openDropDown.bedroom ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-[1px] w-[168px]">
                     <DropDown value={rooms} stateKey="bedroom" selection={selection}
                      setSelection={setSelection} openDropDown={openDropDown}
                     />
                </div>
                    ) : ""
            }
            </div>
            <div className="flex-grow">
            <p className="text-sm font-bold">Bathrooms</p>
            <Button value={selection.bathroom} name={"bathroom"} handleButton={handleButton}/>
            {
                openDropDown.bathroom ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-[1px] w-[171px]">
                     <DropDown value={rooms} stateKey="bathroom" selection={selection}
                      setSelection={setSelection} openDropDown={openDropDown}
                     />
                </div>
                    ) : ""
            }
            </div>
            </div>

           <p className="text-sm font-bold">Property Type</p>
              <Button value={selection.propertyType} name={"propertyType"} handleButton={handleButton}/>
              {
                openDropDown.propertyType ? (
                 <div className="bg-[#ffffff] absolute z-50 mt-[364px] w-[357px]">
                     <DropDown value={propertyTypes} stateKey="propertyType" selection={selection}
                      setSelection={setSelection} openDropDown={openDropDown}
                     />
                </div>
                    ) : ""
            }

            <p className="text-sm font-bold">Conditions</p>
            <div className=" rounded-md flex gap-4">

                <div className="border border-black rounded-md w-[164px]">
                <input
                    type="checkbox"
                    className="m-2"
                    value={selection.availableNow}
                    onChange={() =>
                    setSelection({ ...selection, availableNow: !selection.availableNow })
                            }
                />

                <label className="m-2">Available Now</label>
                </div>
              

                <div className="border border-black rounded-md flex-grow">
                <input
                    type="checkbox"
                    className="m-2"
                    value={selection.petsOk}
                    onChange={() =>
                    setSelection({ ...selection, petsOk: !selection.petsOk })
                            }
                />
                <label className="m-2">Pets OK</label>

                </div>
        
            </div>

            <div className="w-[223px] rounded-[24px] bg-[#0acc29] flex gap-2 justify-center py-2 self-center mt-2">
                <img src={search} alt="search"></img>
                <p className="text-white text-xl">Search Property</p>
            </div>


            

            
       

            

        </div>

      
       
      
    </div>
  </div>
  
  );
}

export default Filter;
