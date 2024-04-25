import Main from './components/3-main/Main'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import './components/5-footer/footer.css'
import { useEffect, useState } from 'react'

function App() {
    const [showButton,setshowButton] = useState(false)
    useEffect(()=>{

        window.addEventListener("scroll",()=>{
          if(window.scrollY>300){
            setshowButton(true)

          }else{
            setshowButton(false)

          }
        })
    },[])
  return (
    <div id='up' className='container'>
    <Header />

    <Hero/>
    <div className='divider'/>
    <Main/>
    <div className='divider'/>
    <Contact/>
    <div className='divider'/>
    <Footer/>
    

          {/* ScrollToTop Design is on fotter.css */}

      {showButton ? 
       <a href='#up'>
          <button className="scollToTop icon-keyboard_arrow_up">

          </button>
       </a> : null}
    </div>
  )
}

export default App
