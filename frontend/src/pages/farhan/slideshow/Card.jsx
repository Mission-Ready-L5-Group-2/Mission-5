

function Card({img, title, description}) {

  return (
   <div
   className="bg-[#cbd5e1] rounded-lg p-4 w-[255px] flex flex-col gap-2 h-[175px]">
    <img src={img} alt={title} className="h-[40px] self-start" />
    <p className="text-[#cf2e2e] font-bold">{title}</p>
    <p className="text-[#647488] text-xs">{description}</p>
   </div>
  )
}

export default Card