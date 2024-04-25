import { useEffect, useState } from 'react'
import './header.css'
function Header() {
const [showModal,setshowModal]=useState(false)
const [theme,settheme]=useState(localStorage.getItem("currentMode")?? "dark")


    useEffect (()=>{
      if(theme=="light"){
        document.body.classList.remove("dark")
        document.body.classList.add("light")

      }else{
        document.body.classList.remove("light")
        document.body.classList.add("dark")

      }
    },[theme])

  return (
    
    <header className='flex' >
      <button  onClick={()=>{
        setshowModal(true)
      }} className='menu icon-menu flex'>
          
      </button>
      <div/>

      <nav>
        <ul className='flex'>
            <li><a href="#project">About</a></li>
            <li><a href="#project">Articles</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={()=>{

            //store on local Storage
            localStorage.setItem("currentMode",theme==="dark" ? "light" : "dark")

            //get value

            settheme(localStorage.getItem("currentMode"))
  }} className='mode flex'>
    {theme==="dark"? <span className='icon-moon-o'></span>
    :<span className='icon-sun'></span>}
         
      </button>


      {showModal &&(
        <div className=' fixed'>
          
        <ul className="modal">
          <li>
            <button className='icon-close' onClick={()=>{
              setshowModal(false)
            }}>
              
            </button>
          </li>
        <li><a href="">About</a></li>
        <li><a href="">Articles</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
        </ul>
      
  </div>
      )}
    </header>
  )
}

export default Header