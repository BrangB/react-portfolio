import LightAndDarkMode from "./components/LightAndDarkMode"
import Info from "./components/Info"
import NavAndDisplay from "./components/NavAndDisplay"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const [expandMenu, setExpandMenu] = useState(false)
  const navigate = useNavigate()

  const navMenu = (paths) => {
    navigate(`${paths}`)
    setExpandMenu(false)
  }

  return (
    <>
      <p className='flex md:hidden absolute top-6 right-6 p-3 z-40 rounded-full w-12 h-12 items-center justify-center duration-200 bg-[#E5EEFF] hover:bg-[#abb3c2]' onClick={() => setExpandMenu(true)}><i className="fa-solid fa-bars text-xl"></i></p>
      <div className={`${expandMenu ? ' scale-150' : "scale-0"} block lg:hidden fixed -top-[800px] -right-[800px] rounded-full  bg-[#FFB341] w-[1500px] h-[1500px] z-40 duration-300 overflow-hidden`}></div>
      <div className={`${expandMenu ? 'scale-100' : 'scale-0'} fixed top-0 right-0 bg-transparent w-full h-full z-50 duration-200 flex flex-col items-center justify-center`}>
        <p className='top-5 right-5 flex lg:hidden fixed rounded-full duration-200 bg-transparent p-3 hover:bg-[#9797978f] w-12 h-12 items-center justify-center' onClick={() => setExpandMenu(false)}><i className="fa-solid fa-xmark text-2xl text-white"></i></p>
        <ul className='gap-6 text-xl text-center md:hidden flex flex-col uppercase'>
              <li className='text-white hover:text-[#4067bd] duration-300 cursor-pointer' onClick={() => navMenu("/")}>Home</li>
              <li className='text-white hover:text-[#4067bd] duration-300 cursor-pointer'  onClick={() => navMenu("/resume")}>Resume</li>
              <li className='text-white hover:text-[#4067bd] duration-300 cursor-pointer'  onClick={() => navMenu("/work")}>Work</li>
              <li className='text-white hover:text-[#4067bd] duration-300 cursor-pointer'  onClick={() => navMenu("/contact")}>Contact</li>
        </ul>
      </div>
      <div className="main bg-primary-color w-screen h-screen p-6 lg:p-8 flex flex-col lg:items-start items-center justify-end  overflow-y-scroll lg:overflow-hidden">
        {/* <div className="w-full flex justify-end"><LightAndDarkMode /></div> */}
        <div className="mainpage w-full h-[100%] lg:h-[98%] flex flex-col lg:flex-row p-0 lg:p-4">
          <Info/>
          <NavAndDisplay />
        </div> 
      </div>
    </>
  )
}

export default App
