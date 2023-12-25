import tick from "../../../assets/homepage/checkmark.svg";
import upArrow from "../../../assets/filter/up-arrow.svg";

function StepCard({title, description, number, id, onClick}) {



  return (
    <div
    className=" rounded-md p-4 flex flex-col gap-1 h-[175px] bg-[#f8fafc]
    lg:min-h-[342px] min-w-[120px] lg:max-w-[192px]">
      <div className="flex justify-between"> 

     <img src={tick} alt="tick" className="h-[40px] self-start" />
     <img src={upArrow} alt="uparrow" onClick={() => onClick(id)}
     className="md:hidden"/>

      </div>
    
     <p className="text-sm text-red-600 font-bold">Step {number}</p>
     <p className="text-[#cf2e2e] font-bold">{title}</p>
     <p className="text-[#647488] text-xs">{description}</p>
    </div>
  )
}

export default StepCard