import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import figma from '../assets/figma.png';
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import react from '../assets/react.png';
import next from '../assets/next.png';
import js from '../assets/js.png';
import php from '../assets/php.png';
import sql from '../assets/sql.png';
import mongo from '../assets/mongo.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import laravel from '../assets/laravel.png';
import bug from '../assets/bug.png';
import jira from '../assets/jira.png';

const services = [
  {
    name: 'UX/UI Design',
    images: [figma],
    description: "Designing conception of websites",
    link: 'https://github.com/omarUsB',
  },
  {
    name: 'Front-End Developer',
    images: [html, css, react, next, js,bootstrap,tailwind],
    description: "Developing front-end interfaces",
    link: 'https://github.com/omarUsB',
  },
  {
    name: 'Back-End Developer',
    images: [html,css,php,sql,mongo,laravel], 
    description: "Developing back-end systems",
    link: 'https://github.com/omarUsB',
  },
  {
    name: 'Tester/Projet Manager',
    images: [bug,jira], 
    description: "Client testing for code and interfaces",
    link: 'https://github.com/omarUsB',
  },
];

const Services = () => {
  return (
    <section className="section mb-56" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Fullstack Web Developer [front-end / back-end]
            </h3>
            <button className="btn btn-sm">
              <a href="https://github.com/omarUsB">See My Work</a>
            </button>
          </motion.div>

          <motion.div
            className="flex-1"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {services.map((service, index) => {
                const { images, name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{description}</p>
                      <div className="flex gap-2 mt-4">
                        {images.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${name} ${imgIndex + 1}`}
                            className="w-10 h-10"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={link} className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
