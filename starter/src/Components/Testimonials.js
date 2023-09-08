import React from 'react'
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { useState } from 'react';

const Testimonials=(props)=>{
let reviews= props.reviews;
const [index,setIndex]= useState(0);

function leftHandler(){
if(index-1<0){
    setIndex(reviews.length-1);
}
else{
    setIndex(index-1);
}
}
function rightHandler(){
    if(index===reviews.length-1){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }
}
function supriseHandler(){
let randomIndex= Math.floor(Math.random() * reviews.length);
setIndex(randomIndex); 
}
return(
<div className='w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
<Card review={reviews[index]}> </Card>

 
<div className="text-violet-400 font-bold flex text-3xl mt-9 gap-3 mx-auto">
    <button onClick={leftHandler} className="cursor-pointer hover:text-violet-500"> <FiChevronLeft/> </button>
    <button onClick={rightHandler} className="cursor-pointer hover:text-violet-500"> <FiChevronRight/></button>
</div>
<div className='mt-5'>
   <button onClick={supriseHandler} className="bg-violet-400 hover:bg-violet-500 mx-auto transition-all duration-200
    cursor-pointer px-10 py-2 rounded-md
     font-bold text-white text-lg">
       Suprise Me
       </button>
</div>

</div>
)
}
export default Testimonials