import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'
import img from '../assets/img.jpg'
const Work = () => {
  return <section className='section mb-56' id='work'>

    
<div className="container mx-auto">
  <div className='flex flex-col lg:flex-row gap-x-10 mt-36'>

  
<motion.div variants={fadeIn('left',0.3)}  initial='hidden'whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
  {/* {text} */}
  <div>
  <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work.</h2>
  <p className='max-w-sm mb-16'> During this time as a junior developer who just got his certification,
     I did some projects like Todolist and Airbnb websites with my friends,
     created some portfolios and sold them, and designed websites using Figma.</p>
  <button className='btn btn-sm'><a href="/"> View All Projects</a></button>
  </div>
  {/* {image} */}
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* {overlay} */}
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    {/* {img} */}
    <img src={img1} alt=""  className='group-hover:scale-125 transition-all duration-500'/>
    {/* {pretitle} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Airbnb Project</span></div>
    {/* {title} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'><span className='text-3xl text-white'>
      airbnb project front end and back end [link in my github]</span></div>
  </div>
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* {overlay} */}
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    {/* {img} */}
    <img src={img} alt=""  className='group-hover:scale-125 transition-all duration-500'/>
    {/* {pretitle} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Design Using Figma</span></div>
    {/* {title} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'><span className='text-3xl text-white'>i designed many web sites using figma during my studies</span></div>
  </div>
</motion.div>
<motion.div variants={fadeIn('left',0.5)}  initial='hidden'whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 flex flex-col gap-y-10'>
  {/* {image} */}
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* {overlay} */}
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    {/* {img} */}
    <img src={img2} alt=""  className='group-hover:scale-125 transition-all duration-500'/>
    {/* {pretitle} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>ToDoList</span></div>
    {/* {title} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'><span className='text-3xl text-white'>Small projects Like To do List for tasks</span></div>
  </div>
  {/* {image} */}
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* {overlay} */}
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    {/* {img} */}
    <img src={img3} alt=""  className='group-hover:scale-125 transition-all duration-500'/>
    {/* {pretitle} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Creating Portfolio Using React Js/ Next Js</span></div>
    {/* {title} */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>i created some portfolios and i sold them</span></div>
  </div>
  {/* {image} */}
</motion.div>
 




</div>
</div>


  </section>;
};

export default Work;
