import React from "react";

function Results() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-md">Our Results in Numbers</p>
      <div className="flex flex-wrap gap-1 justify-evenly">
        <div className="w-[102px]">
        <div className="text-red-600 text-[24px] font-bold border-b-2 border-red-600">10+</div>

          <p className="text-[#647488] text-sm">Years in business</p>
        </div>
        <div className="w-[102px]">
          <div className="text-red-600 text-[24px] font-bold border-b-2 border-red-600">6</div>
          <p className="text-[#647488] text-sm">Division under 1 umbrella</p>
        </div>
        <div className="w-[102px]">
          <div className="text-red-600 text-[24px] font-bold border-b-2 border-red-600">50</div>
          <p className="text-[#647488] text-sm">Years of Combined Experience</p>
        </div>
        <div className="w-[102px]">
          <div className="text-red-600 text-[24px] font-bold border-b-2 border-red-600">2</div>
          <p className="text-[#647488] text-sm">Countries, 3 cities in Operation</p>
        </div>
        <div className="w-[102px]">
          <div className="text-red-600 text-[24px] font-bold border-b-2 border-red-600">100+</div>
          <p className="text-[#647488] text-sm">Millions of Total asset value </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
