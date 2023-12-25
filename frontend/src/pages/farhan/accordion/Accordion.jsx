import downArrow from "../../../assets/homepage/down-arrow.svg";
import StepCard from "./StepCard";

function Accordion({ id, number, title, onClick, isOpen, cardDesc }) {

  return (
    isOpen ? (

        <StepCard title={title} description = {cardDesc} number={number}
        id={id} onClick={onClick} isOpen={isOpen}
        />
   
    ) :  <div className="min-w-[343px] rounded-md bg-[#f8fafc] flex gap-2 h-[42px] items-center" onClick={() => onClick(id)}>
    <p className="text-sm text-red-600 font-bold ml-2">{number}</p>
    <p className="text-sm flex-grow font-bold">{title}</p>
    <img src={downArrow} alt="downArrow" className="mr-2" />
  </div>
  );
}

export default Accordion;
