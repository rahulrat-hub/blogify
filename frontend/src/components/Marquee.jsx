import React from 'react'

function marquee({title}) {
  return (
    <div className="overflow-hidden border-y border-black bg-white py-3">
       <div className="flex w-max animate-marquee whitespace-nowrap">
        <div className="flex gap-10 px-5 text-sm tracking-[4px] font-medium">
           <span>{title}</span>
            <span>{title}</span>
             <span>{title}</span>
              <span>{title}</span>
        </div>

         <div className="flex gap-10 px-5 text-sm tracking-[4px] font-medium">
           <span>{title}</span>
            <span>{title}</span>
             <span>{title}</span>
              <span>{title}</span>
        </div>
       </div>
    </div>
  )
}

export default marquee