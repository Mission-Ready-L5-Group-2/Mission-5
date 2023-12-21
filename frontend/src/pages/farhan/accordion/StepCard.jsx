import tick from "../../../assets/homepage/checkmark.svg";

function StepCard({title, description, number}) {
  return (
    <div
    className=" rounded-md p-4 flex flex-col gap-1 h-[175px] bg-[#f8fafc]
    min-h-[342px] min-w-[120px] max-w-[192px]">
     <img src={tick} alt="tick" className="h-[40px] self-start" />
     <p className="text-sm text-red-600 font-bold">Step {number}</p>
     <p className="text-[#cf2e2e] font-bold">{title}</p>
     <p className="text-[#647488] text-xs">{description}</p>
    </div>
  )
}

export default StepCard