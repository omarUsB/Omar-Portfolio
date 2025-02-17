import React from 'react';
//contup
import CountUp from 'react-countup'
import { Link } from 'react-scroll';
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'

import {fadeIn} from '../variants'
const   About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,

  })
  return <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">

      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0 h-screen'>

        <motion.div variants={fadeIn('right',0.3)}  initial='hidden'whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 bg-about bg-contain bg-no-repeat h-[460px] mix-blend-lighten bg-top'></motion.div>



        <motion.div variants={fadeIn('left',0.5)}  initial='hidden'whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>i am a Web Developer Fullstack front-end back-end</h3>
          <p className='mb-6'>
          My humble statistics
          </p>
          {/* {stats} */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={4} duration={5} />: null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
               Years Of Practicing <br /> Programmation

              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={20} duration={5}/>: null}
                {inView ?  "+" : ''}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
               Projects  <br />Completed 
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                {inView ? <CountUp start={0} end={10} duration={5} />: null}
                {inView ?  "+" : ''}

              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Technology skills
              </div>
            </div>



           
          </div>
            <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'><Link to='contact'>Contact Me</Link></button>
                <a href="#" className='text-gradient btn-link'>My Protfolio</a>
            </div>
        </motion.div>

      </div>
    </div>





    </section>;
};

export default About;
