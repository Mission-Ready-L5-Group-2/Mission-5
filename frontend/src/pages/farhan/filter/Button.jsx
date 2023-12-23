
import upArrow from "../../../assets/filter/up-arrow.svg";

function Button({value}) {
  return (
    <div className="flex flex-grow border border-black rounded-md">
        <button className=" p-1 flex gap-4 flex-grow border-r-0"> {value}</button>
        <img src={upArrow} className="self-center mr-2 flex"></img>
    </div>
    
  )
}

export default Button