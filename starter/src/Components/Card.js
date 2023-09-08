import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card=(props)=>{
    let review=props.review;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" 
                src={review.image} alt="ima" />
                <div className="w-[140px] h-[140px] z-[-20] rounded-full bg-violet-500 absolute top-[-6px] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="tracking-wider font-bold text-2xl capitalize letter-spacing: 0.05em;">{review.name}</p>
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>
            
       
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
           

        </div>
    )
}

export default Card