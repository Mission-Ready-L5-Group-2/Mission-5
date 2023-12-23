import x from "../../../assets/filter/x.svg";
import search from "../../../assets/homepage/search.svg";
import Button from "./Button";




function Filter({filterOpen, setFilterOpen}) {





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
            <Button value={"All New Zealand"}/>
            <Button value={"All Districts"}/>
            </div>
            <Button value={"All Suburbs"}/>
            <p className="text-sm font-bold">Price</p>
            <div className="flex gap-2">
            <Button value={"Any "}/>
            <span> - </span>
            <Button value={"Any "}/>
            </div>

            <div className="flex flex-grow gap-5">
            <div className="flex-grow">
            <p className="text-sm font-bold">Bedrooms</p>
            <Button value={"Any "}/>
            </div>
            <div className="flex-grow">
            <p className="text-sm font-bold">Bedrooms</p>
            <Button value={"Any "}/>
            </div>
            </div>

           <p className="text-sm font-bold">Property Type</p>
              <Button value={"Any "}/>

            <p className="text-sm font-bold">Conditions</p>
            <div className=" rounded-md flex gap-4">

                <div className="border border-black rounded-md w-[164px]">
                <input type="checkbox" className="m-2"></input>
                <label className="m-2">Available Now</label>
                </div>
              

                <div className="border border-black rounded-md flex-grow">
                <input type="checkbox" className="m-2"></input>
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
