import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';
import { FaGoogle } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [flag,setflag]=useState(false)


  const handleflag=(e)=>{
    e.preventDefault()
    setflag(!flag)
  }
  const handlecloseflag=(e)=>{
    e.preventDefault()
    setflag(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_omar',  
      'template_xf2aomf', 
      formData,
      '8-jiTov1BUyhxKmuB'  
    ).then((result) => {
        console.log(result.text);
        setflag(true)
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
    });

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* {text} */}
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial={'hidden'} 
            whileInView={'show'}  
            viewport={{ once: false, amount: 0.7 }} 
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get In Touch
              </h4>
              <h2 className='text-[45px] capitalize lg:text-[90px] leading-none mb-12'>
                Let's Work <br /> Together!
              </h2>
            </div>
          </motion.div>
          {/* {form} */}
          <motion.form 
            variants={fadeIn('left', 0.5)} 
            initial={'hidden'} 
            whileInView={'show'}  
            viewport={{ once: false, amount: 0.7 }} 
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            
          >
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              placeholder='Your Name' 
              required
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              placeholder='Your Email' 
              required
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder='Your Message'
              required
            ></textarea>
            <button className='btn btn-lg' type="submit" onClick={handleSubmit} onSubmit={handleflag}> Send Message</button>
          </motion.form>

          {flag && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handlecloseflag}
        >
          <div
            className="w-72 h-40 bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-center text-lg font-semibold mb-4'>Your message has been sent successfully</h2>
            <h3 className="text-center text-lg font-semibold mb-2">i'll check my</h3>
            <ul className="flex justify-around text-lg">
              <a href="#">
                <FaGoogle />
              </a>
             
            </ul>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
