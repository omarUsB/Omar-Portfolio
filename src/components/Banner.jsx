import React from 'react';
import image from '../assets/goat.png'
// icons
import {FaGithub ,FaInstagram ,FaTwitter, FaLinkedin} from 'react-icons/fa'
// Animation
import {TypeAnimation} from 'react-type-animation'
// Motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';


const Banner = () => {
  return <section className='mix-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'> 

<div className="container mx-auto">

          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1  text-center font-secondary lg:text-left'>
               <motion.h1 variants={fadeIn('up',0.3)} initial={'hidden'} whileInView={'show'}  viewport={{once:false ,amount:0.7}} className='text-[33px]  leading-[0.8] lg:text-[40px]'>OMAR <span>KHALIL</span></motion.h1>
               <motion.div variants={fadeIn('up',0.4)} initial={'hidden'} whileInView={'show'}  viewport={{once:false ,amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]'>
               <span className=' text-white mr-4'>
                  I am a  
               </span>   
               <TypeAnimation sequence={[
                    ' Web Developer',2000,
                    ' Web Designer',2000,
                    ' Code Tester',2000,
                    
                  ]} 
                speed={50} 
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />
               </motion.div>
                <motion.p variants={fadeIn('up',0.5)} initial={'hidden'} whileInView={'show'}  viewport={{once:false ,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
                I'm Omar Khalil, a junior developer with a deep passion for web development. 
                I'm 22 years old and have experience working with a variety of technologies, including JavaScript, PHP, HTML, CSS, React, and Laravel.
                 I've had the opportunity to work on projects that involve both front-end and back-end development.
                  </motion.p>

                  <motion.div variants={fadeIn('up',0.6)} initial={'hidden'} whileInView={'show'}  viewport={{once:false ,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                  <button className='btn btn-lg'><Link to='contact'>Contact Me</Link></button>
                  <a href="#" className='text-gradient btn-link'>My Portfolio</a>
                  </motion.div>
                  <motion.div variants={fadeIn('up',0.6)} initial={'hidden'} whileInView={'show'}  viewport={{once:false ,amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                    <a href="https://www.instagram.com/bohemianisme_omar/" > <FaInstagram/></a>
                    <a href="https://github.com/omarUsB"> <FaGithub/></a>
                    <a href="https://www.linkedin.com/in/omar-khalil-a45734302/" > <FaLinkedin/></a>
                    <a href="https://x.com/OmarKha94190356" > <FaTwitter/></a>
                  </motion.div>
          </div>

                <motion.div variants={fadeIn('down',0.8)} initial={'hidden'} whileInView={'show'}  viewport={{once:false ,amount:0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                  <img src={image} alt="" />
                </motion.div>
          </div>

</div>








  </section>;
};

export default Banner;
