/* eslint-disable react/no-unescaped-entities */
import Lottie from 'lottie-react'
import './hero.css'
import heroAnimation from "../../../src/animation/Heros.json";
import { motion } from 'framer-motion';


function Hero() {
  return (
    <section className='hero flex'>
        <div className='left-section'>
          <div className="parent-avatar flex">

            <motion.img
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{damping:6,type:"spring",stiffness:100}}

            className='avatar' src="./myphoto-modified.png" alt="" />
            <div className="icon-verified"></div>
         
          </div>

          <h1
            className='title'>
            Software Developer, founder, and amateur astronaut.
          </h1>

          <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:4}}

          className="subTitle">
            I'm Moueen Kiblawi, a software developer graduate from Lebanese International Unevirsity with Bachelor's Degree in Computer Science.  I am passionate about building high quality applications. 
            I am a software developer with over 1 year of experience in the industry. Currently working as an independent consultant specializing in web development.
          
          </motion.p>

          <div className="icons flex">
            <div >
              <a className="icon  icon-instagram" href="https://www.instagram.com/moueen_kb/"></a></div>
           
            <div >
              <a className="icon icon-github" href='https://github.com/moueenkiblawi'></a></div>
            
            <div >
              <a href='https://www.linkedin.com/in/moueen-kiblawi-331575264/' 
              className="icon icon-linkedin"></a></div>
            
            <div className="icon icon-twitter"></div>

          </div>


        </div>

        <div className='right-section animation'>

        <Lottie className="contact-animation"
                style={{ height: "100%" ,width:"25rem"}}
               animationData={heroAnimation}
              />
        </div>
    </section>
  )
}

export default Hero
