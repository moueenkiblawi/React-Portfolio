import {  useState } from 'react'
import './main.css'
import Products from './ProductDetail'
import { AnimatePresence, motion } from 'framer-motion'
function Main() {
  const [clicked,setclicked]=useState("all")
  const [category,setcategory]=useState(Products)
   
  const handleCategoryFilter = (categoryName) => {
    setclicked(categoryName);
    if (categoryName === "all") {
      setcategory(Products);
    } else {
      const newArr = Products.filter(item => item.category === categoryName);
      setcategory(newArr);
    }
  };

  
  return (
    <main className='flex'>
      <section className="left-section flex">
        
  <button id='project' onClick={() => handleCategoryFilter("all")} className={clicked === "all" ? 'active' : null}>All Projects</button>
  <button onClick={() => handleCategoryFilter("HTML")} className={clicked === "HTML" ? 'active' : null}>HTML & CSS</button>
  <button onClick={() => handleCategoryFilter("javascript")} className={clicked === "javascript" ? 'active' : null}>JavaScript</button>
  <button onClick={() => handleCategoryFilter("React")} className={clicked === "React" ? 'active' : null}>React & MUI</button>
  <button onClick={() => handleCategoryFilter("Node")} className={clicked === "Node" ? 'active' : null}>Node & Express</button>
</section>


      <section className="right-section  flex">
      <AnimatePresence>

        {category.map((item,index)=>{
          return(
            
            <motion.article
            layout
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring",damping:8,stiffness:50}}
            key={index} className="card">

            <img width={266} src={item.img} alt="" />

            <div style={{width:"266px"}} className="box">
              <h1 className='title'>{item.Title}</h1>
              <p className="subtitle">{item.description}</p>
             
              <div className="flex card-icons">

                <div style={{gap:"11px"}} className='flex'>
                <div ><a className="icon-link" href={item.link}></a></div>
                  <div ><a className="icon-github" href={item.github}></a></div>
                </div>
               
                <a className='link flex' href='/'>more 
                <span style={{alignSelf:"end"}} className="icon-arrow-right"></span>
              
                </a>
              </div>
           
            </div>

          </motion.article>
          )
        })}
          </AnimatePresence>

      </section>
    </main>
  )
}

export default Main